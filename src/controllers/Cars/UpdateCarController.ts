import { Request, Response } from "express";
import { UpdateCarService } from "../../services/Cars/UpdateCarService";


export class UpdateCarController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const { brand, model, price, category_id } = request.body

        const service = new UpdateCarService()
        const result = await service.execute({ id, brand, model, price, category_id })
        if (result instanceof Error)
            response.status(500).json({ 'error': result.message })

        response.json(result)
    }
}