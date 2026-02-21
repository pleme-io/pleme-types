/**
 * Backend API types
 * Types for data received from the backend
 */

export interface BackendProductImage {
  id: string
  url: string
  thumbnailUrl: string
  alt?: string
  isPrimary: boolean
  order: number
}

export interface BackendProduct {
  id: string
  sku: string
  name: string
  description: string
  basePrice: {
    amount: string
    currency: string
    formatted: string
  }
  compareAtPrice?: {
    amount: string
    currency: string
    formatted: string
  }
  brand?: string
  categoryId: string
  inStock: boolean
  stockQuantity: number
  isActive: boolean
  lowStockThreshold: number
  averageRating?: number
  totalReviews: number
  tags: string[]
  images: BackendProductImage[]
  createdAt: string
  updatedAt: string
}

export interface BackendProductEdge {
  node: BackendProduct
}

export interface BackendProductsResponse {
  products: {
    edges: BackendProductEdge[]
    totalCount: number
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor?: string
      endCursor?: string
    }
  }
}

export interface BackendError {
  message: string
  code?: string
  details?: unknown
}
