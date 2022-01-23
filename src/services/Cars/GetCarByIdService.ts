import { getRepository } from 'typeorm';
import { Cars } from '../../entities/Cars';

type carData = {
    id: number
}

export class GetCarByIdService {
    async execute({ id }: carData) : Promise<Cars | Error> {
        const repo = getRepository(Cars)
        const car = await repo.findOne(id, {
            relations: ['category']
        })
        if(!car)
            return new Error("o carro com o id informado não existe")

        return car
    }
}