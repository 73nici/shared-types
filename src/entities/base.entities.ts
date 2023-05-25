import { BaseError } from '../errors'

export type TServiceResponse<T> = { success: false, error: BaseError} | { success: true, body: T}