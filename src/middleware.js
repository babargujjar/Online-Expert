// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
//   const cookies = req.cookies;
//   const isLoggedIn = cookies.get("isLoggedIn"); // Get the cookie directly from the request

//   // If the user is not logged in and trying to access an admin route
//   if (isAdminRoute && !isLoggedIn) {
//     // If not logged in, redirect to login page
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   // Allow request to proceed if logged in or accessing non-admin routes
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*", "/login"], // This ensures the middleware only applies to /admin routes and /login
// };

import { NextResponse } from "next/server";

export function middleware(req) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const cookies = req.cookies;
  const isLoggedIn = cookies.get("isLoggedIn"); // Get the cookie directly from the request

  // If the user is not logged in and trying to access an admin route
  if (isAdminRoute && !isLoggedIn) {
    // Redirect to login page
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If the user navigates away from /admin, expire the isLoggedIn cookie
  if (!isAdminRoute && isLoggedIn) {
    const response = NextResponse.next();
    response.cookies.set("isLoggedIn", "", { maxAge: 0, path: "/" }); // Expire the cookie immediately
    return response;
  }

  // Allow request to proceed if logged in or accessing non-admin routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/"], // Apply middleware to all routes, but check conditions
};
