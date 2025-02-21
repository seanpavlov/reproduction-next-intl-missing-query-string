import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'sv'],
  localePrefix: "as-needed",
  defaultLocale: 'en',
  domains: [
    {
      domain: "localhost",
      locales: ["en", "sv"],
      defaultLocale: "en",
    },
  ],
 
  pathnames: {
    "/": "/",
    "/another-page": {
        en: "/another-page",
        sv: "/annan-sida"
    }
  }
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);