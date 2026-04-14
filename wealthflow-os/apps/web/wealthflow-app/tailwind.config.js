const {
  themeTokens,
} = require('../../../libs/shared/design-system/src/lib/themes/token.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
    '../../../libs/shared/design-system/src/**/*.{ts,tsx,html}',
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
        display: [
          themeTokens.typography.display.fontSize,
          {
            lineHeight: themeTokens.typography.display.lineHeight,
            fontWeight: themeTokens.typography.display.fontWeight,
          },
        ],
        h1: [
          themeTokens.typography.h1.fontSize,
          {
            lineHeight: themeTokens.typography.h1.lineHeight,
            fontWeight: themeTokens.typography.h1.fontWeight,
          },
        ],
        h2: [
          themeTokens.typography.h2.fontSize,
          {
            lineHeight: themeTokens.typography.h2.lineHeight,
            fontWeight: themeTokens.typography.h2.fontWeight,
          },
        ],
        'body-lg': [
          themeTokens.typography.bodyLg.fontSize,
          {
            lineHeight: themeTokens.typography.bodyLg.lineHeight,
          },
        ],
        body: [
          themeTokens.typography.body.fontSize,
          {
            lineHeight: themeTokens.typography.body.lineHeight,
          },
        ],
        'body-sm': [
          themeTokens.typography.bodySm.fontSize,
          {
            lineHeight: themeTokens.typography.bodySm.lineHeight,
          },
        ],
        label: [
          themeTokens.typography.label.fontSize,
          {
            lineHeight: themeTokens.typography.label.lineHeight,
            fontWeight: themeTokens.typography.label.fontWeight,
          },
        ],
      },
      borderRadius: themeTokens.borderRadius,
      boxShadow: themeTokens.shadows,
      fontFamily: {
        mono: [themeTokens.typography.mono.fontFamily],
      },
    },
  },
  plugins: [],
};
