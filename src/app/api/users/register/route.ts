import prisma from "@/lib/prisma";
import userDTOFactory from "../../DTOs/user-dto-factory";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body: User = await request.json();

  //validate (YUP)

  const emailExists = await prisma.user.findFirst({
    where: { email: body.email },
  });

  const userExists = await prisma.user.findFirst({
    where: { username: body.username },
  });

  if (emailExists) {
    return NextResponse.json(
      { message: "Ya existe una cuenta con ese correo." },
      { status: 409 }
    );
  }

  if (userExists) {
    return NextResponse.json({ error: "Usuario en uso." }, { status: 409 });
  }

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(body.password, salt);

  try {
    await prisma.user.create({
      data: userDTOFactory.userRegisterDTO(body, password),
    });
    return NextResponse.json(
      { message: "Usuario registrado." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
