// Level 0: Foundation Types
// Authentication domain types with branded types for type safety
// Zanzibar-compliant: Uses roles array (not singular role) for multi-role support

export type UserId = string & { readonly _brand: 'UserId' }
export type Email = string & { readonly _brand: 'Email' }
export type Password = string & { readonly _brand: 'Password' }
export type CPF = string & { readonly _brand: 'CPF' }
export type PhoneNumber = string & { readonly _brand: 'PhoneNumber' }

export type AuthProvider = 'google' | 'apple' | 'facebook'
export type AuthMethod = 'email' | 'magic-link' | 'social' | 'biometric'

/**
 * User roles following Zanzibar authorization model
 * Users can have multiple roles simultaneously
 */
export type UserRole = 'guest' | 'customer' | 'user' | 'supplier' | 'admin' | 'superadmin'

/**
 * Basic user information
 */
export interface User {
  readonly id: UserId
  readonly email: Email
  readonly firstName: string
  readonly lastName: string
  readonly cpf?: CPF
  readonly phoneNumber?: PhoneNumber
  readonly createdAt: string
  readonly updatedAt: string
}

/**
 * Authenticated user with Zanzibar-compliant roles and permissions
 */
export interface AuthUser {
  readonly id: string
  readonly email: string
  readonly username?: string
  readonly displayName?: string
  readonly firstName: string
  readonly lastName: string
  /** Zanzibar-compliant: Array of all user roles (not singular role) */
  readonly roles: UserRole[]
  /** Permissions derived from roles */
  readonly permissions: string[]
  readonly cpf?: string
  readonly phoneNumber?: string
  readonly emailVerified?: boolean
  readonly secondaryEmail?: string
  readonly secondaryEmailVerified?: boolean
  /** Whether MFA is enabled for this user */
  readonly mfaEnabled?: boolean
  /** OAuth provider if user registered via OAuth (e.g., 'google', 'apple', 'facebook') */
  readonly oauthProvider?: AuthProvider
  /** List of linked OAuth providers for this user (from backend computed field) */
  readonly linkedProviders?: AuthProvider[]
  /** Whether user has a password set (OAuth users may not have one initially) */
  readonly hasPassword?: boolean
  readonly createdAt?: string
  readonly updatedAt?: string
}

/**
 * Authentication tokens following JWT standards
 */
export interface AuthTokens {
  readonly accessToken: string
  readonly refreshToken: string
  readonly expiresIn: number
  readonly tokenType: 'Bearer'
  readonly sessionId?: string
}

/**
 * Login form data (Zod schema compatible)
 */
export interface LoginFormData {
  readonly email: Email
  readonly cpf: CPF
  readonly password: Password
  readonly rememberMe: boolean
}

/**
 * Login credentials for auth store
 */
export interface LoginCredentials {
  readonly email: string
  readonly cpf: string
  readonly password: string
  readonly rememberMe?: boolean
}

/**
 * Signup form data for registration
 */
export interface SignupData {
  readonly email: string
  readonly username?: string
  readonly displayName: string
  readonly password: string
  readonly confirmPassword: string
  readonly firstName: string
  readonly lastName: string
  readonly cpf: string
  readonly phoneNumber?: string
  readonly acceptsTerms: boolean
  readonly acceptsMarketing?: boolean
}

/**
 * Registration result from auth service
 */
export interface RegisterResult {
  readonly verificationRequired: boolean
  readonly message: string
  readonly userId: string
  readonly email: string
}

/**
 * Legacy type - use SignupData instead
 * @deprecated Use SignupData
 */
export interface RegisterUserData {
  readonly email: Email
  readonly firstName: string
  readonly lastName: string
  readonly cpf?: CPF
  readonly phoneNumber?: PhoneNumber
  readonly password: Password
  readonly acceptsMarketing: boolean
}

export interface AuthError {
  readonly code: string
  readonly message: string
  readonly field?: string
}

export interface EmailAvailabilityResult {
  readonly emailExists: boolean
  readonly suggestions?: readonly string[]
}

export interface MagicLinkRequest {
  readonly email: Email
  readonly redirectUrl?: string
}

export interface MagicLinkResponse {
  readonly success: boolean
  readonly message: string
  readonly expiresAt: string
}

export interface SocialAuthRequest {
  readonly provider: AuthProvider
  readonly redirectUrl?: string
}

export interface BiometricCredential {
  readonly id: string
  readonly type: 'public-key'
  readonly publicKey: string
  readonly counter: number
}

export interface AuthState {
  readonly isAuthenticated: boolean
  readonly user: User | null
  readonly loading: boolean
  readonly error: AuthError | null
}

// REMOVED: PasswordStrength and PasswordValidationResult - Orphaned types not used anywhere
// Password strength is handled by calculatePasswordStrength() in @/lib/auth/password-strength.ts
// which returns { score: 0-4, label: string } (NIST SP 800-63B 2025 compliant)

// Utility type constructors
export const createEmail = (email: string): Email => email as Email
export const createPassword = (password: string): Password => password as Password
export const createCPF = (cpf: string): CPF => cpf as CPF
export const createPhoneNumber = (phone: string): PhoneNumber => phone as PhoneNumber
export const createUserId = (id: string): UserId => id as UserId
