import { BaseError } from './base.error'
import { EUserMessages } from '../messages'
import { EBaseStatus } from '../statuses'

export class UserNotFound extends BaseError {
    constructor(message = EUserMessages.NOT_FOUND) {
        super(message)
        this.status = EBaseStatus.NOT_FOUND
    }
}

export class UserCreateDuplicate extends BaseError {
    constructor(message = EUserMessages.CREATE_DUPLICATE) {
        super(message)
        this.status = EBaseStatus.CONFLICT
    }
}

export class UserConfirmationMatchError extends BaseError {
    constructor(message = EUserMessages.CONFIRMATION_MATCH_ERROR) {
        super(message)
        this.status = EBaseStatus.BAD_REQUEST
    }
}