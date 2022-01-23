import { getRepository } from "typeorm"
import { Category } from "../../entities/Category"

type CategoryData = {
    name: string
}

export class CreateCategoryService {
    async execute({ name } : CategoryData) : Promise<Category | Error> {
        const repo = getRepository(Category)

        if(await repo.findOne({ name }))
            return new Error('Esta categoria já existe')

        const category = repo.create({
            name: name.toUpperCase(),
            created_at: new Date()
        })
        await repo.save(category)

        return category
    }
}