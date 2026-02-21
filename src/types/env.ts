/**
 * Runtime Environment Types
 *
 * Centralized type definitions for runtime configuration
 */

export interface RuntimeEnv {
  VITE_API_URL?: string
  VITE_GRAPHQL_ENDPOINT?: string
  VITE_WS_ENDPOINT?: string
  VITE_ENABLE_GRAPHQL?: string
  VITE_ENABLE_SUBSCRIPTIONS?: string
  VITE_ENABLE_OFFLINE_MODE?: string
  VITE_ENABLE_MOCK_DATA?: string
  VITE_USE_REAL_CART_API?: string
  VITE_ENABLE_CSP?: string
  VITE_ENABLE_HTTPS_ONLY?: string
  VITE_API_KEY?: string
  VITE_APP_NAME?: string
  VITE_APP_URL?: string
  VITE_ENV?: string
  VITE_BUILD_TIMESTAMP?: string
  VITE_DEPLOYED_AT?: string
  VITE_ENABLE_ELO?: string
  VITE_ENABLE_SERVICE_HEALTH_BACKEND?: string
  VITE_SEARCH_SERVICE_SUPPORT?: string
  VITE_FEATURE_ADVERTISEMENTS?: string
  VITE_REQUIRE_CPF_FOR_LOGIN?: string
  VITE_ENABLE_FACEBOOK_OAUTH?: string
  // OAuth Configuration
  VITE_GOOGLE_OAUTH_CLIENT_ID?: string
  VITE_GOOGLE_OAUTH_REDIRECT_URI?: string
  VITE_FACEBOOK_OAUTH_CLIENT_ID?: string
  VITE_FACEBOOK_OAUTH_REDIRECT_URI?: string
}

declare global {
  interface Window {
    ENV?: RuntimeEnv
  }
}
