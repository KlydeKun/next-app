import { NextRequest, NextResponse } from "next/server";
import schema from "../products/schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Bread", price: 3.5 },
  ]);
}

// Create a product
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 }); // bad request
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 } // created
  );
}
