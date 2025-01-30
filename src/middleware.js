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
    response.cookies.set("isLoggedIn", "", { maxAge: 3600, path: "/" }); 
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/"], 
};
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(req) {
//   const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
//   const cookies = req.cookies;
//   const token = cookies.get("authToken");

//   if (isAdminRoute && !token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (token) {
//     try {
//       // Verify the JWT token
//       jwt.verify(token, process.env.JWT_SECRET);
//     } catch (error) {
//       // If verification fails, redirect to login page
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*", "/"],
// };
