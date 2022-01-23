import { getRepository } from "typeorm";
import { Cars } from "../../entities/Cars";

export class GetAllCarsService {
    async execute() {
        const repo = getRepository(Cars)
        const cars = await repo.find({
            relations: ['category']
        })
        return cars
    }
}