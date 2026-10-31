import {
  hashPassword,
  verifyPassword,
  createSessionToken,
  parseCookies,
  createSessionCookie,
  clearSessionCookie,
  USERS_STORE,
  SESSIONS_STORE,
  type User,
} from '../../../lib/auth.js';

export async function GET(req: Request): Promise<Response> {
  const cookies = parseCookies(req.headers.get('cookie'));
  const sessionToken = cookies['froot_session'];

  if (!sessionToken) {
    return Response.json(
      { authenticated: false, user: null },
      { status: 401 }
    );
  }

  const session = SESSIONS_STORE.get(sessionToken);
  if (!session) {
    return Response.json(
      { authenticated: false, user: null },
      { status: 401 }
    );
  }

  const userRecord = Array.from(USERS_STORE.values()).find((r) => r.user.id === session.userId);
  if (!userRecord) {
    return Response.json(
      { authenticated: false, user: null },
      { status: 401 }
    );
  }

  return Response.json(
    { authenticated: true, user: userRecord.user },
    { status: 200 }
  );
}

export async function POST(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const action = url.searchParams.get('action') || 'login';

  if (action === 'logout') {
    const cookies = parseCookies(req.headers.get('cookie'));
    const token = cookies['froot_session'];
    if (token) {
      SESSIONS_STORE.delete(token);
    }

    return new Response(null, {
      status: 302,
      headers: {
        'Set-Cookie': clearSessionCookie(),
        Location: '/login',
      },
    });
  }

  let email = '';
  let password = '';
  let name = '';

  const contentType = req.headers.get('content-type') || '';
  if (contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await req.formData();
    email = String(formData.get('email') || '').trim();
    password = String(formData.get('password') || '');
    name = String(formData.get('name') || '').trim();
  } else {
    try {
      const json = await req.json();
      email = String(json.email || '').trim();
      password = String(json.password || '');
      name = String(json.name || '').trim();
    } catch {}
  }

  if (!email || !password) {
    return Response.json({ error: 'Email and password required' }, { status: 400 });
  }

  if (action === 'signup') {
    if (USERS_STORE.has(email)) {
      return Response.json({ error: 'User already exists' }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);
    const user: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      email,
      name: name || email.split('@')[0]!,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    USERS_STORE.set(email, { user, passwordHash });

    const token = createSessionToken();
    SESSIONS_STORE.set(token, {
      id: 'sess_' + Math.random().toString(36).substring(2, 9),
      token,
      userId: user.id,
      expiresAt: new Date(Date.now() + 86400 * 7 * 1000).toISOString(),
    });

    return new Response(null, {
      status: 302,
      headers: {
        'Set-Cookie': createSessionCookie(token),
        Location: '/dashboard',
      },
    });
  }

  // Default: Login
  const record = USERS_STORE.get(email);
  if (!record) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const isValid = await verifyPassword(password, record.passwordHash);
  if (!isValid) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = createSessionToken();
  SESSIONS_STORE.set(token, {
    id: 'sess_' + Math.random().toString(36).substring(2, 9),
    token,
    userId: record.user.id,
    expiresAt: new Date(Date.now() + 86400 * 7 * 1000).toISOString(),
  });

  return new Response(null, {
    status: 302,
    headers: {
      'Set-Cookie': createSessionCookie(token),
      Location: '/dashboard',
    },
  });
}
