import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // Token will exits if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl;

    // Allow request if the following is true
    // 1. Its a request from next-auth session & provider fetching
    // 1. token exists
    if (pathname.includes("/api/auth") || token) {
        return NextResponse.next()
    }

    // redirect user to login if they dont have token
    if (!token && pathname !== "/login") {
        return NextResponse.redirect("http://localhost:3000/login")
    }
}