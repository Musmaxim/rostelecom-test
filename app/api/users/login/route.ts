import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import {
  findUserByEmail,
  generateTokens,
  getDbAndReqBody,
} from "@/lib/utils/api-routes";

export async function POST(req: Request) {
  const { db, reqBody } = await getDbAndReqBody(clientPromise, req);
  const user = await findUserByEmail(db, reqBody.email);

  if (user !== undefined) {
    if (!user) {
      return NextResponse.json({
        warningMessage: "Пользователь уже существует",
      });
    }
  }
/* @ts-ignore */
  if (!bcrypt.compareSync(reqBody.password, user.password)) {
    return NextResponse.json({
      warningMessage: "Неправильный логин или пароль!",
    });
  }
/* @ts-ignore */
  const tokens = generateTokens(user.name, reqBody.email);

  return NextResponse.json(tokens);
}
