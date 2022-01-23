import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

export class DeleteCategoryService {
    async execute(id) {
        const repo = getRepository(Category)
        if(!(await repo.findOne(id)))
            return new Error('a categoria com o id infomado não existe')
        await repo.delete(id)
    }
}