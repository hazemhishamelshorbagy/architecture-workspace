// themes.ts - Centralized Design Tokens
export const themeTokens = {
  colors: {
    brand: {
      primary: '#1f4e79',//Primary buttons, links, active states, headers
      primarylight: '#2E75B6',//Hover states, secondary actions, badges
      primarydark: '#163A5C ',//Pressed states, emphasis borders
      accentgreen: '#2E7D32',//Positive values, gains, success states, income
      accentred: '#C62828', //Negative values, losses, errors, danger
      accentorange: '#E65100', //Warnings, alerts, spending guard breaches
      accentgold: '#D4A017',//Gold assets, premium features, highlights
      background: '#F8F9FA',//Page background, card surfaces
      surface: '#FFFFFF',//Card backgrounds, modals, dropdowns 

    },
    text: {
      primary: '#1A1A1A',   //Primary text, headings
      secondary: '#6B7280',   //Secondary text, descriptions, labels
      disabled: '#9CA3AF',   // Disabled text, placeholders
      info: '#3B82F6',      // Info
    },
    border: {
      divider: '#E5E7EB',     // Dividers
      border: '#E5E7EB',     // borders

    }
  },
  typography: {
    display: {
      fontSize: '36px',
      lineHeight: '44px',
      fontWeight: '700',
    },
    h1: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: '700',
    },
    h2: {
      fontSize: '22px',
      lineHeight: '30px',
      fontWeight: '600',
    },
    h3: {
      fontSize: '18px',
      lineHeight: '26px',
      fontWeight: '600',
    },
    bodyLg: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '400',
    },
    body: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '400',
    },
    bodySm: {
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '400',
    },
    label: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: '500',
    },
    mono: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '400',
      fontFamily: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace',
    },
  },
  spacing: {
    container: '2rem',
    cardPadding: '1.5rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',

    DEFAULT: '12px',      // الحواف الموحدة للنظام
    full: '9999px',
  },
  shadows: {
    soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  }
} as const;

export type ThemeTokens = typeof themeTokens;