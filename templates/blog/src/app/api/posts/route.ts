import { POSTS } from '../../../data/posts.js';

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const tag = url.searchParams.get('tag');
  const q = url.searchParams.get('q')?.toLowerCase();

  let results = [...POSTS];

  if (tag) {
    results = results.filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
  }

  if (q) {
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  return Response.json(
    {
      posts: results,
      total: results.length,
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
