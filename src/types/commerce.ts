/**
 * Commerce-related branded types
 * Following type-driven development principles
 */

// Branded types
export type ProductId = string & { readonly _brand: 'ProductId' }
export type SKU = string & { readonly _brand: 'SKU' }
export type Price = number & { readonly _brand: 'Price' }
export type Quantity = number & { readonly _brand: 'Quantity' }
export type CouponCode = string & { readonly _brand: 'CouponCode' }
export type OrderId = string & { readonly _brand: 'OrderId' }
export type CartId = string & { readonly _brand: 'CartId' }

// Type constructors
export const createProductId = (id: string): ProductId => id as ProductId
export const createSKU = (sku: string): SKU => sku as SKU
export const createPrice = (price: number): Price => {
  if (price < 0) {
    throw new Error('Price cannot be negative')
  }
  return price as Price
}
export const createQuantity = (qty: number): Quantity => {
  if (qty < 0 || !Number.isInteger(qty)) {
    throw new Error('Quantity must be positive integer')
  }
  return qty as Quantity
}
export const createCouponCode = (code: string): CouponCode => code.toUpperCase() as CouponCode
export const createOrderId = (id: string): OrderId => id as OrderId
export const createCartId = (id: string): CartId => id as CartId

// Domain types
export interface Money {
  amount: Price
  currency: 'BRL' | 'USD'
}

export interface Coupon {
  code: CouponCode
  type: 'percentage' | 'fixed'
  value: number
  minPurchase?: Price
  maxDiscount?: Price
  validUntil?: Date
}

export interface Product {
  id: ProductId
  sku: SKU
  name: string
  slug: string
  price: Price
  compareAtPrice?: Price
  imageUrl: string
  description?: string
  inStock: boolean
  stockQuantity?: Quantity
}

export interface CartItem {
  id: string
  product: Product
  quantity: Quantity
  addedAt: Date
}

export interface Cart {
  id: CartId
  items: CartItem[]
  coupon?: Coupon
  createdAt: Date
  updatedAt: Date
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export interface Order {
  id: OrderId
  items: CartItem[]
  status: OrderStatus
  total: Money
  subtotal: Money
  discount?: Money
  shipping: Money
  coupon?: Coupon
  createdAt: Date
  updatedAt: Date
}
