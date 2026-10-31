import { getProducts } from '../../../data/products.js';

export async function GET(): Promise<Response> {
  const products = await getProducts();
  return Response.json(products, {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, max-age=60',
    },
  });
}
