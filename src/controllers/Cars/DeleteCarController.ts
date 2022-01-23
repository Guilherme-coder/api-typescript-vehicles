import { Request, Response } from "express";
import { DeleteCarService } from "../../services/Cars/DeleteCarService";



export class DeleteCarController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const service = new DeleteCarService()
        const result = await service.execute({ id })

        if(result instanceof Error)
            return response.status(400).json({ 'error': result.message })

        return response.json()
    }

}