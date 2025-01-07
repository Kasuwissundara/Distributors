import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(_request: NextRequest) {
  // Using underscore prefix to indicate intentionally unused parameter
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};