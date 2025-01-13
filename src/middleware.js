import { NextResponse } from "next/server";

export function middleware(req) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const cookies = req.cookies;
  const isLoggedIn = cookies.get("isLoggedIn"); 

  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!isAdminRoute && isLoggedIn) {
    const response = NextResponse.next();
    response.cookies.set("isLoggedIn", "", { maxAge: 0, path: "/" }); 
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/"], 
};
