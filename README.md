# reproduction-next-intl-missing-query-string

## The bug

When using `next-intl`, the query string is dropped in some cases when using `next-intl`'s `Link`-component. This happens when default locale is shown without locale prefix (`as-needed` option).

## Getting started

1. Install [pnpm](https://pnpm.io/installation)
2. Run `pnpm install` in root
3. Run `pnpm dev`

## How to reproduce the bug

1. On the page: Click on `Swedish`-link
2. You will now see that the route has changed to `localhost:3000/sv`
3. Hover over `A link to another page with query string`-link. You will now see that the page has `?name=guest` as query string appended to the url
4. Click on `English`-link
5. You will now see that the route has changed to `localhost:3000`
6. Hover over `A link to another page with query string`-link. You will now see that the page doesn't have any query string appended to the url

## Possible fix

In the `createSharedNavigationFns.tsx` do the following change [here](https://github.com/amannn/next-intl/blob/main/packages/next-intl/src/navigation/shared/createSharedNavigationFns.tsx#L162):

```typescript
unprefixed={
  forcePrefixSsr && isLocalizable
    ? {
        domains: (config as any).domains.reduce(
          (
            acc: Record<Locale, string>,
            domain: DomainConfig<AppLocales>
          ) => {
            // @ts-expect-error -- This is ok
            acc[domain.domain] = domain.defaultLocale;
            return acc;
          },
          {}
        ),
        pathname: getPathname(
          // @ts-expect-error -- This is ok
          {
            locale: curLocale,
            href: pathnames == null ? pathname : {pathname, params}
            query: href.query // Add this line?
          },
          false
        )
      }
    : undefined
}
```
