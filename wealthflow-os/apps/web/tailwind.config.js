// const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

// The above utility import will not work if you are using Next.js' --turbo.
// Instead you will have to manually add the dependent paths to be included.
// For example
// ../libs/buttons/**/*.{ts,tsx,js,jsx,html}',                 <--- Adding a shared lib
// !../libs/buttons/**/*.{stories,spec}.{ts,tsx,js,jsx,html}', <--- Skip adding spec/stories files from shared lib

// If you are **not** using `--turbo` you can uncomment both lines 1 & 19.
// A discussion of the issue can be found: https://github.com/nrwl/nx/issues/26510
const { themeTokens } = require('../../shared/design-system/src/lib/design-system');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
    //     ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        // سيقوم Tailwind بتوليد كلاسات مثل bg-brand-primarydark أو text-brand-accentgreen
        brand: themeTokens.colors.brand,
        text: themeTokens.colors.text,
        border: themeTokens.colors.border,
      },
      fontSize: {
        'display': [themeTokens.typography.display.fontSize, {
          lineHeight: themeTokens.typography.display.lineHeight,
          fontWeight: themeTokens.typography.display.fontWeight,
        }],
        'h1': [themeTokens.typography.h1.fontSize, {
          lineHeight: themeTokens.typography.h1.lineHeight,
          fontWeight: themeTokens.typography.h1.fontWeight,
        }],
        'h2': [themeTokens.typography.h2.fontSize, {
          lineHeight: themeTokens.typography.h2.lineHeight,
          fontWeight: themeTokens.typography.h2.fontWeight,
        }],
        'body-lg': [themeTokens.typography.bodyLg.fontSize, {
          lineHeight: themeTokens.typography.bodyLg.lineHeight,
        }],
        'body': [themeTokens.typography.body.fontSize, {
          lineHeight: themeTokens.typography.body.lineHeight,
        }],
        'body-sm': [themeTokens.typography.bodySm.fontSize, {
          lineHeight: themeTokens.typography.bodySm.lineHeight,
        }],
        'label': [themeTokens.typography.label.fontSize, {
          lineHeight: themeTokens.typography.label.lineHeight,
          fontWeight: themeTokens.typography.label.fontWeight,
        }],
      },
      borderRadius: themeTokens.borderRadius,
      boxShadow: themeTokens.shadows,
      fontFamily: {
        'mono': [themeTokens.typography.mono.fontFamily],

      }
    }
  },
  plugins: [],
};
