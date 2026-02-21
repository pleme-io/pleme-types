/**
 * Stripe Configuration Constants
 *
 * Centralized Stripe-related constants to prevent hardcoding
 */

/**
 * Stripe Appearance Configuration
 */
export const STRIPE_CONFIG: {
  readonly THEME: 'stripe'
  readonly BORDER_RADIUS: '4px'
  readonly PRIMARY_COLOR: '#1976d2'
  readonly LOCALE: 'pt-BR'
  readonly CURRENCY: 'brl'
} = {
  THEME: 'stripe',
  BORDER_RADIUS: '4px',
  PRIMARY_COLOR: '#1976d2', // Material UI primary blue
  LOCALE: 'pt-BR',
  CURRENCY: 'brl',
} as const

/**
 * Stripe Key Validation
 */
export const STRIPE_KEY: {
  readonly PREFIX_PUBLISHABLE: 'pk_'
  readonly PREFIX_SECRET: 'sk_'
} = {
  PREFIX_PUBLISHABLE: 'pk_',
  PREFIX_SECRET: 'sk_',
} as const

/**
 * Type helpers
 */
export type StripeTheme = typeof STRIPE_CONFIG.THEME
export type StripeCurrency = typeof STRIPE_CONFIG.CURRENCY
