export async function POST(req: Request): Promise<Response> {
  const orderId = 'ord_' + Math.random().toString(36).substring(2, 9);

  return Response.json(
    {
      success: true,
      orderId,
      status: 'pending_payment',
      message: 'Order created successfully. Ready for Stripe / LemonSqueezy integration.',
      createdAt: new Date().toISOString(),
    },
    {
      status: 201,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
