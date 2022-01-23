import { Request, Response } from "express";
import { GetAllCarsService } from "../../services/Cars/GetAllCarsService";

export class GetAllCarsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCarsService()
        const cars = await service.execute()
        return response.json(cars)
    }
}