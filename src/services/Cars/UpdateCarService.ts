import { getRepository } from 'typeorm'
import { Cars } from '../../entities/Cars'


type carData = {
    id: number,
    brand: string,
    model: string,
    price: number,
    category_id: number
}

export class UpdateCarService {
    async execute({ id, brand, model, price, category_id } : carData) : Promise<Cars | Error> {
        const repo = getRepository(Cars)
        const car = await repo.findOne(id)
        if(!car)
            return new Error('o carro com o id informado não existe')

        car.brand = brand ? brand.toLowerCase() : car.brand
        car.model = model ? model.toLowerCase() : car.brand
        car.price = price ? price : car.price
        car.category_id = category_id ? category_id : car.category_id

        await repo.save(car)
        return car
    }
}