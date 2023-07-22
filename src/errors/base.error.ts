import { EBaseMessage } from '../messages'
import { EBaseStatus } from '../statuses'

export abstract class BaseError extends Error {
    public status!: number
    public message!: string
}

/**
 * BadRequest errors class
 * @param message errors message - defaults to "Bad Request"
 */
export class BadRequest extends BaseError {
    constructor(message = EBaseMessage.BAD_REQUEST) {
        super(message)
        this.status = EBaseStatus.BAD_REQUEST
    }
}

/**
 * Unauthorized errors class
 * @param message errors message - defaults to "Unauthorized"
 */
export class Unauthorized extends BaseError {
    constructor(message = EBaseMessage.UNAUTHORIZED) {
        super(message)
        this.status = EBaseStatus.UNAUTHORIZED
    }
}

/**
 * NotFound errors class
 * @param message errors message - defaults to "Not Found"
 */
export class NotFound extends BaseError {
    constructor(message = EBaseMessage.NOT_FOUND) {
        super(message)
        this.status = EBaseStatus.NOT_FOUND
    }
}

/**
 * InternalServerError class
 * @param message errors message - defaults to "Internal Server Error"
 */
export class InternalServerError extends BaseError {
    constructor(message = EBaseMessage.INTERNAL_SERVER_ERROR) {
        super(message)
        this.status = EBaseStatus.INTERNAL_SERVER_ERROR
    }
}

/**
 * Conflict class
 * @param message errors message - defaults to "Conflict"
 */
export class Conflict extends BaseError {
    constructor(message = EBaseMessage.CONFLICT) {
        super(message)
        this.status = EBaseStatus.CONFLICT
    }
}