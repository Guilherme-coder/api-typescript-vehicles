import { getRepository } from "typeorm";
import { Users } from "../../entities/Users";
import bcrypt from 'bcrypt'

type userData = {
    email: string,
    password: string
}

export class AuthenticateService {
    async execute({ email, password } : userData) : Promise<Users | Error> {
        const repo = getRepository(Users)

        const user = await repo.findOne({
                                where: { email: email }
                            })

        if(!user)
            return new Error('credenciais incorretas')

        if(!await bcrypt.compare(password, user.password))
            return new Error('credenciais incorretas')

        user.password = undefined

        return user
    }
}