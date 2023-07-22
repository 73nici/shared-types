import { BaseError } from '../errors'

export type TBaseResponse<T, U = void> = { success: true, body: T, message: U} | { success: false, error: BaseError }