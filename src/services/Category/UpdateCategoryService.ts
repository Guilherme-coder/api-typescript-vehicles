import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

type CategoryUpdateData = {
    id: number,
    name: string
}

export class UpdateCategoryService {
    async execute({ id, name } : CategoryUpdateData): Promise<Category | Error> {
        const repo = getRepository(Category)
        const category = await repo.findOne(id)

        if(!category)
            return new Error('a categoria com o id infomado não existe')

        category.name = name ? name.toUpperCase() : category.name

        await repo.save(category)
        return category
    }
}