import { PRODUCTS } from '../../../data/products.js';

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const category = url.searchParams.get('category');
  const limit = Number(url.searchParams.get('limit') || 20);

  let results = [...PRODUCTS];
  if (category) {
    results = results.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  results = results.slice(0, limit);

  return Response.json(
    {
      products: results,
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
