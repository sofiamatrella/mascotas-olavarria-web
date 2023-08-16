import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import AuthUtils from "@/utils/AuthUtils";

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

    const token = await new SignJWT({
      id: user.externalId,
      shelter: user.shelter,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(AuthUtils.getJwtSecretKey());

    const response = NextResponse.json({
      authToken: token,
    });

    response.cookies.set({ name: "auth-token", value: token, path: "/" });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
