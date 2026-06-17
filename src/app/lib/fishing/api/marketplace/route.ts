import { NextResponse } from "next/server";

export async function GET() {

  return NextResponse.json({
    listings: [
      {
        item: "Salmon",
        price: 15
      },
      {
        item: "Corn",
        price: 10
      },
      {
        item: "Iron Ore",
        price: 25
      }
    ]
  });

}
