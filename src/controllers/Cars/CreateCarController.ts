import { Response, Request } from 'express';
import { CreateCarService } from '../../services/Cars/CreateCarService';

export class CreateCarController {
    async handle(request: Request, response: Response) {
        const { brand, model, price, category_id } = request.body

        if(!brand)
            return response.status(400).json({ error: 'um veículo não pode ser cadastrado sem uma marca' })

        if(!model)
            return response.status(400).json({ error: 'um veículo não pode ser cadastrado sem um modelo' })

        if(!price)
            return response.status(400).json({ error: 'um veículo não pode ser cadastrado sem um preço' })

        if(!category_id)
            return response.status(400).json({ error: 'um veículo não pode ser cadastrado sem uma categoria' })


        if(!category_id)
            return response.status(400).json({ error: 'O id da categoria não pode ser nulo' })


        const service = new CreateCarService()
        const result = await service.execute({
            brand,
            model,
            price,
            user_id: request.userId,
            category_id
        })

        if(result instanceof Error)
            return response.status(400).json({ error: result.message })

        return response.json(result)
    }
}