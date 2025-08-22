import { NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/products';

export async function GET() {
  const products = getProducts();
  return NextResponse.json(products);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newProduct = addProduct(body);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
