import { BaseError } from '../errors/base.error'

export type TBaseResponse<T, U = void> = { success: true, body: T, message: U} | { success: false, error: BaseError }