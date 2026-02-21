/**
 * Apollo Client Constants
 *
 * Centralized Apollo Client configuration constants
 */

/**
 * Custom Event Names
 *
 * Events dispatched by Apollo error link for error context integration
 */
export const APOLLO_EVENTS: {
  readonly GRAPHQL_ERROR: 'apollo-graphql-error'
  readonly NETWORK_ERROR: 'apollo-network-error'
} = {
  GRAPHQL_ERROR: 'apollo-graphql-error',
  NETWORK_ERROR: 'apollo-network-error',
} as const

/**
 * HTTP Headers
 */
export const APOLLO_HEADERS: {
  readonly AUTHORIZATION: 'authorization'
  readonly API_KEY: 'x-api-key'
  readonly BEARER_SCHEME: 'Bearer'
} = {
  AUTHORIZATION: 'authorization',
  API_KEY: 'x-api-key',
  BEARER_SCHEME: 'Bearer',
} as const

/**
 * Retry Configuration
 */
export const APOLLO_RETRY: {
  readonly INITIAL_DELAY_MS: 300
  readonly MAX_DELAY_MS: typeof Infinity
  readonly JITTER: true
  readonly MAX_ATTEMPTS: 3
} = {
  INITIAL_DELAY_MS: 300,
  MAX_DELAY_MS: Infinity,
  JITTER: true,
  MAX_ATTEMPTS: 3,
} as const

/**
 * Type helpers
 */
export type ApolloEventType = (typeof APOLLO_EVENTS)[keyof typeof APOLLO_EVENTS]
