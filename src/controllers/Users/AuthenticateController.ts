import { Request, Response } from "express";
import { AuthenticateService } from "../../services/Users/AuthenticateService";
import jwt from 'jsonwebtoken'

const AuthConfig = require('../../config/auth')

export class AuthenticateController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body
        const service = new AuthenticateService()

        const user = await service.execute({ email, password })

        if(user instanceof Error)
            return response.status(400).json({ 'error': user.message })

        const token = jwt.sign({ id: user.id }, AuthConfig.secret, {
            expiresIn: 86400
        })

        return response.json({ user, token })
    }
}