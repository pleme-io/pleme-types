/**
 * Branded types for address-related data
 * Following type-driven development principles
 */

import { CEP_PATTERNS } from '../utils/regex'

export type AddressId = string & { readonly _brand: 'AddressId' }
export type CEP = string & { readonly _brand: 'CEP' }
export type State = string & { readonly _brand: 'State' }
export type City = string & { readonly _brand: 'City' }
export type Street = string & { readonly _brand: 'Street' }
export type Neighborhood = string & { readonly _brand: 'Neighborhood' }

// Type constructors
export const createAddressId = (id: string): AddressId => id as AddressId
export const createCEP = (cep: string): CEP => cep as CEP
export const createState = (state: string): State => state as State
export const createCity = (city: string): City => city as City
export const createStreet = (street: string): Street => street as Street
export const createNeighborhood = (neighborhood: string): Neighborhood =>
  neighborhood as Neighborhood

// Type guards
export const isAddressId = (value: unknown): value is AddressId => {
  return typeof value === 'string' && value.length > 0
}

export const isCEP = (value: unknown): value is CEP => {
  return typeof value === 'string' && CEP_PATTERNS.FORMATTED.test(value)
}

export const isState = (value: unknown): value is State => {
  const validStates = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]
  return typeof value === 'string' && validStates.includes(value)
}

// Address type
export interface Address {
  id: AddressId
  label: string
  type: 'home' | 'work' | 'other'
  cep: CEP
  street: Street
  number: string
  complement?: string
  neighborhood: Neighborhood
  city: City
  state: State
  isDefault: boolean
}

// Address form data (before validation)
export interface AddressFormData {
  label: string
  type: 'home' | 'work' | 'other'
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  isDefault: boolean
}
