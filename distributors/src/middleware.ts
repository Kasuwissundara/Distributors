import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // For debugging
  console.log('Middleware path:', request.nextUrl.pathname);
  
  // Check the session cookie from Firebase
  const session = request.cookies.get('__session')?.value;

  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};