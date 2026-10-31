export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);

  return Response.json(
    {
      status: 'healthy',
      framework: 'FrootKit',
      version: '1.3.1',
      engine: 'Preact SSR + Monomorphic V8 Router',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      nodeVersion: process.version,
      query: Object.fromEntries(url.searchParams.entries()),
    },
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },
    }
  );
}
