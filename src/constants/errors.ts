/**
 * Error Constants
 *
 * Centralized error codes and messages to prevent hardcoding across the application
 */

/**
 * GraphQL Error Codes
 *
 * Standard error codes returned by the GraphQL API
 * CRITICAL: These must match the error codes defined in backend services
 */
export const GRAPHQL_ERROR_CODES: {
  readonly UNAUTHENTICATED: 'UNAUTHENTICATED'
  readonly FORBIDDEN: 'FORBIDDEN'
  readonly TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS'
  readonly RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED'
  readonly BAD_USER_INPUT: 'BAD_USER_INPUT'
  readonly VALIDATION_ERROR: 'VALIDATION_ERROR'
  readonly INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
  readonly SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE'
} = {
  // Authentication & Authorization
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  FORBIDDEN: 'FORBIDDEN',

  // Rate Limiting
  TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',

  // Validation
  BAD_USER_INPUT: 'BAD_USER_INPUT',
  VALIDATION_ERROR: 'VALIDATION_ERROR',

  // Server Errors
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
} as const

/**
 * HTTP Status Codes
 *
 * Common HTTP status codes used throughout the application
 */
export const HTTP_STATUS: {
  readonly OK: 200
  readonly CREATED: 201
  readonly ACCEPTED: 202
  readonly NO_CONTENT: 204
  readonly BAD_REQUEST: 400
  readonly UNAUTHORIZED: 401
  readonly FORBIDDEN: 403
  readonly NOT_FOUND: 404
  readonly CONFLICT: 409
  readonly UNPROCESSABLE_ENTITY: 422
  readonly TOO_MANY_REQUESTS: 429
  readonly INTERNAL_SERVER_ERROR: 500
  readonly BAD_GATEWAY: 502
  readonly SERVICE_UNAVAILABLE: 503
  readonly GATEWAY_TIMEOUT: 504
} = {
  // Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  // Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // Server Errors
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const

/**
 * Default Error Messages
 *
 * User-facing error messages for common scenarios
 */
export const ERROR_MESSAGES: {
  readonly NETWORK_ERROR: 'Network error occurred. Please check your connection and try again.'
  readonly SERVER_ERROR: 'Server error occurred. Please try again later.'
  readonly UNAUTHORIZED: 'You must be logged in to perform this action.'
  readonly FORBIDDEN: 'You do not have permission to perform this action.'
  readonly SESSION_EXPIRED: 'Your session has expired. Please log in again.'
  readonly RATE_LIMITED: 'Too many requests. Please wait before trying again.'
  readonly VALIDATION_ERROR: 'Please check your input and try again.'
  readonly REQUIRED_FIELD: 'This field is required.'
  readonly UNKNOWN_ERROR: 'An unexpected error occurred. Please try again.'
  readonly OPERATION_FAILED: 'Operation failed. Please try again.'
} = {
  // Network
  NETWORK_ERROR: 'Network error occurred. Please check your connection and try again.',
  SERVER_ERROR: 'Server error occurred. Please try again later.',

  // Authentication
  UNAUTHORIZED: 'You must be logged in to perform this action.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',

  // Rate Limiting
  RATE_LIMITED: 'Too many requests. Please wait before trying again.',

  // Validation
  VALIDATION_ERROR: 'Please check your input and try again.',
  REQUIRED_FIELD: 'This field is required.',

  // Generic
  UNKNOWN_ERROR: 'An unexpected error occurred. Please try again.',
  OPERATION_FAILED: 'Operation failed. Please try again.',
} as const

/**
 * Type helpers for error codes
 */
export type GraphQLErrorCode = (typeof GRAPHQL_ERROR_CODES)[keyof typeof GRAPHQL_ERROR_CODES]
export type HttpStatus = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS]
export type ErrorMessage = (typeof ERROR_MESSAGES)[keyof typeof ERROR_MESSAGES]
