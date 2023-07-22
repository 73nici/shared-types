import { BaseError } from './base.error'
import { EServiceMessages } from '../messages'


export class ServiceSessionNotProvided extends BaseError {
    constructor(message = EServiceMessages.SESSION_NOT_PROVIDED) {
        super(message)
        this.status = 400
    }
}