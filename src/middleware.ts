"use client";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import AuthUtils from "./utils/AuthUtils";

const AUTH_PAGES = ["/login", "/registro"];

const isAuthPages = (url: string) =>
  AUTH_PAGES.some((page) => page.startsWith(url));

export function middleware(request: NextRequest) {
  const { cookies, nextUrl, url } = request;
  const { value: token } = cookies.get("auth-token") ?? { value: null };

  const verifiedToken = token && AuthUtils.verifyToken(token);
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  if (isAuthPageRequested) {
    if (!verifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("auth-token");
      return response;
    }

    return NextResponse.redirect(new URL("/", url));
  }
}

export const config = {
  matcher: ["/login", "/registro"],
};
