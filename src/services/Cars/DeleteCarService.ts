import { getRepository } from "typeorm"
import { Cars } from "../../entities/Cars"


type carData = {
    id: number
}

export class DeleteCarService {
    async execute({ id } : carData) {
        const repo = getRepository(Cars)
        const car = await repo.findOne(id)

        if(!car)
            return new Error("o carro com o id informado não existe")

        await repo.delete(car)
    }
}