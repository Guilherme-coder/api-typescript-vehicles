import { Request, Response } from "express";
import { RegisterService } from "../../services/Users/RegisterService";


export class RegisterController {
    async handle(request: Request, response: Response) {
        const { email, username, tel, password } = request.body

        const service = new RegisterService()
        const result = await service.execute({ email, username, tel, password })

        if(result instanceof Error)
            return response.status(400).json({ 'error': result.message })

        return response.json(result)
    }
}