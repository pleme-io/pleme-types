/**
 * Base Application Error Class
 *
 * All custom errors should extend this class
 * Provides consistent error handling across the application
 */

export type ErrorCode =
  | 'VALIDATION_ERROR'
  | 'NETWORK_ERROR'
  | 'AUTH_ERROR'
  | 'PERMISSION_DENIED'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'RATE_LIMITED'
  | 'SERVER_ERROR'
  | 'PAYMENT_ERROR'
  | 'CART_ERROR'
  | 'STOCK_ERROR'
  | 'UNKNOWN_ERROR'
  | 'InvalidCredentials'
  | 'ValidationError'
  | 'Unauthorized'

export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'

export interface ErrorContext {
  userId?: string
  orderId?: string
  productId?: string
  endpoint?: string
  timestamp?: string
  error?: string
  apolloError?: string
  [key: string]: string | number | boolean | undefined
}

export class AppError extends Error {
  public readonly code: ErrorCode
  public readonly severity: ErrorSeverity
  public readonly context?: ErrorContext
  public readonly originalError?: Error
  public readonly isOperational: boolean

  constructor(
    message: string,
    code: ErrorCode = 'UNKNOWN_ERROR',
    severity: ErrorSeverity = 'medium',
    context?: ErrorContext,
    originalError?: Error
  ) {
    super(message)

    // Maintains proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    this.name = this.constructor.name
    this.code = code
    this.severity = severity
    this.context = context
    this.originalError = originalError

    // Operational errors are expected and can be handled gracefully
    // Non-operational errors are programming errors that should crash the app
    this.isOperational = true
  }

  /**
   * Create error from unknown thrown value
   */
  static from(error: unknown, defaultMessage = 'An unexpected error occurred'): AppError {
    if (error instanceof AppError) {
      return error
    }

    if (error instanceof Error) {
      return new AppError(
        error.message || defaultMessage,
        'UNKNOWN_ERROR',
        'medium',
        undefined,
        error
      )
    }

    if (typeof error === 'string') {
      return new AppError(error, 'UNKNOWN_ERROR')
    }

    return new AppError(defaultMessage, 'UNKNOWN_ERROR', 'medium', {
      error: String(error),
    })
  }

  /**
   * Check if error is operational (can be handled gracefully)
   */
  static isOperationalError(error: Error): boolean {
    if (error instanceof AppError) {
      return error.isOperational
    }
    return false
  }

  /**
   * Convert to plain object for logging/serialization
   */
  toJSON(): {
    name: string
    message: string
    code: ErrorCode
    severity: ErrorSeverity
    context?: ErrorContext
    stack?: string
    originalError?: string
  } {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      severity: this.severity,
      context: this.context,
      stack: this.stack,
      originalError: this.originalError?.message,
    }
  }

  /**
   * Get user-friendly error message
   */
  getUserMessage(): string {
    // Map technical errors to user-friendly messages
    const userMessages: Partial<Record<ErrorCode, string>> = {
      NETWORK_ERROR: 'Erro de conexão. Verifique sua internet e tente novamente.',
      AUTH_ERROR: 'Erro de autenticação. Por favor, faça login novamente.',
      PERMISSION_DENIED: 'Você não tem permissão para realizar esta ação.',
      NOT_FOUND: 'O item solicitado não foi encontrado.',
      RATE_LIMITED: 'Muitas tentativas. Por favor, aguarde um momento.',
      SERVER_ERROR: 'Erro no servidor. Tente novamente mais tarde.',
      PAYMENT_ERROR: 'Erro no processamento do pagamento.',
      CART_ERROR: 'Erro ao atualizar o carrinho.',
      STOCK_ERROR: 'Produto sem estoque disponível.',
      VALIDATION_ERROR: 'Por favor, verifique os dados informados.',
    }

    return userMessages[this.code] || this.message
  }

  /**
   * Check if error should be reported to monitoring service
   */
  shouldReport(): boolean {
    return this.severity === 'high' || this.severity === 'critical'
  }
}

/**
 * Field-level error for form validation
 */
export interface FieldError {
  field: string
  message: string
  code?: string
}

/**
 * Registration result returned by backend
 */
export interface RegisterResult {
  verificationRequired: boolean
  message: string
  userId: string
  email: string
}
