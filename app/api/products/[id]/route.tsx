import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

// get the product by id
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 100)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Milk", price: 2.5 });
}

// modify the products by id
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 100)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name, price: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 100)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({});
}
