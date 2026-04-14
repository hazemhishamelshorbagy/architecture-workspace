import { themeTokens as tokens } from './lib/themes/token.js';

// 2. Export with Type Casting for the Frontend
export var themeTokens = tokens as any;
export type ThemeTokens = typeof themeTokens;

export * from './lib/components/index.js';
