import { NextRequest, NextResponse } from "next/server";

const locales = ["tr", "en"];
const defaultLocale = "tr";

function getLocale(request: NextRequest): string {
  // Check if there's a saved language preference in cookies
  const savedLanguage = request.cookies.get("iyn-language")?.value;
  if (savedLanguage && locales.includes(savedLanguage)) {
    return savedLanguage;
  }

  // Check browser language preferences
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLanguage = acceptLanguage
      .split(",")[0]
      .split("-")[0]
      .toLowerCase();
    
    if (locales.includes(preferredLanguage)) {
      return preferredLanguage;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already includes a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to the appropriate locale
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!_next|api|favicon.ico|logo.ico|logo.png|logo-white.png|.*\\..*).*)",
  ],
};

