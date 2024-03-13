import clientPromise from "@/lib/mongodb";
import {
  getDbAndReqBody,
  getNewAndBestsellersGoods,
} from "@/lib/utils/api-routes";
import { NextResponse } from "next/server";

export async function GET() {
  const { db } = await getDbAndReqBody(clientPromise, null);

  return NextResponse.json(await getNewAndBestsellersGoods(db, "isBestseller"));
}
