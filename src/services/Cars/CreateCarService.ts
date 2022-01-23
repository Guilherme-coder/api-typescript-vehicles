import { getRepository } from "typeorm";
import { Cars } from "../../entities/Cars";
import { Category } from "../../entities/Category";

type CarData = {
    brand: string,
    model: string,
    price: number,
    category_id: number
}

export class CreateCarService {
    async execute({brand, model, price, category_id} : CarData) : Promise<Cars | Error> {
        const repoCategory = getRepository(Category)
        const repo = getRepository(Cars)
        if(!await repoCategory.findOne(category_id))
            return new Error('A categoria informada não existe')

        const car = repo.create({
            brand: brand.toLowerCase(),
            model: model.toLowerCase(),
            price: price,
            category_id: category_id,
            created_at: new Date()
        })

        await repo.save(car)

        return car
    }
}