import { Response, Request } from 'express';
import { CreateCarService } from '../../services/Cars/CreateCarService';

export class CreateCarController {
    async handle(request: Request, response: Response) {
        const { brand, model, price, category_id } = request.body

        if(!category_id)
            return response.status(400).json({ error: 'O id da categoria não pode ser nulo' })


        const service = new CreateCarService()
        const result = await service.execute({
            brand,
            model,
            price,
            category_id
        })

        if(result instanceof Error)
            return response.status(400).json({ error: result.message })

        return response.json(result)
    }
}