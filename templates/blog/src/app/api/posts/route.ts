import { getPosts } from '../../../data/posts.js';

export async function GET(): Promise<Response> {
  const posts = await getPosts();
  return Response.json(posts, {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=60',
    },
  });
}
