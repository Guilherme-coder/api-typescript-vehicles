import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id) {
        const repo = getRepository(Category)
        if(!(await repo.findOne(id)))
            return new Error('Esta categoria não existe, logo não pode ser excluída')
        await repo.delete(id)
    }
}