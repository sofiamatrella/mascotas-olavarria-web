import prisma from "@/lib/prisma";
import userDTOFactory from "../../DTOs/user-dto-factory";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const body: User = await request.json();

  try {
    const user = await prisma.user.findFirst({
      where: { email: body.email },
      include: { shelter: true },
    });

    if (!user)
      return NextResponse.json(
        { message: "E-mail incorrecto" },
        { status: 401 }
      );

    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword)
      return NextResponse.json(
        { message: "Contraseña incorrecta" },
        { status: 401 }
      );

    const token = jwt.sign(
      { id: user.externalId, shelter: user.shelter, role: user.role },
      process.env.TOKEN_SECRET as string,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { email: user.email },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "7d" }
    );

    return NextResponse.json({ authToken: token, refreshToken: refreshToken });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
