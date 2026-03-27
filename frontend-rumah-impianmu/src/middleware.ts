import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isLoginPage = request.nextUrl.pathname.startsWith('auth/login');
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');

  // Jika belum login dan mencoba masuk halaman admin, lempar ke login
  if (!token) {
    if (isAdminPage) {
      return NextResponse.redirect(new URL('auth/login', request.url));
    }
    return NextResponse.next();
  }

  // Jika ada token, dekode secara manual (karena Edge runtime Next.js tidak mendukung jwt-decode utuh)
  try {
    const payloadBase64 = token.split('.')[1];
    const decodedJson = Buffer.from(payloadBase64, 'base64').toString('ascii');
    const decoded = JSON.parse(decodedJson);

    // Jika sudah login tapi buka halaman /login, lempar ke dashboard masing-masing
    if (isLoginPage) {
      if (decoded.role === 'admin') {
        return NextResponse.redirect(new URL('/admin/house', request.url));
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Jika user biasa memaksa masuk rute /admin, lempar ke beranda
    if (isAdminPage && decoded.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }

  } catch (error) {
    // Jika token rusak/dimanipulasi, hapus token dan suruh login ulang
    const response = NextResponse.redirect(new URL('auth/login', request.url));
    response.cookies.delete('token');
    return response;
  }

  return NextResponse.next();
}

// Tentukan path mana saja yang akan dijaga oleh middleware ini
export const config = {
  matcher: ['/login', '/admin/:path*'],
};