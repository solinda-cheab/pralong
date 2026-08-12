import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Optional matcher config
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
};