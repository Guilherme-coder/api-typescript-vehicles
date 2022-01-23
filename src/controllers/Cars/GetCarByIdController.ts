import { Request, Response } from "express";
import { GetCarByIdService } from "../../services/Cars/GetCarByIdService";


export class GetCarByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const service = new GetCarByIdService()
        const car = await await service.execute({ id })

        if(car instanceof Error)
            response.status(400).json({ 'error': car.message })

        response.json(car)
    }
}