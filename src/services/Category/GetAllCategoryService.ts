import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

export class GetAllCategoryService {
    async execute() {
        const repo = getRepository(Category)
        const categories = repo.find()
        return categories
    }
}