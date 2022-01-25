import { getRepository } from "typeorm"
import { Users } from "../../entities/Users"
import bcrypt from 'bcrypt'


type userData = {
    email: string,
    username: string,
    tel: string,
    password: string
}

export class RegisterService {
    async execute({ email, username, tel, password } : userData) : Promise<Users | Error> {
        const repo = getRepository(Users)

        if(!email)
            return new Error('o email não pode ser nulo na criação de um usuário')

        if(await repo.findOne({
            where: { email: email }
        }))
            return new Error('este email já foi cadastrado em nosso sistema')

        if(!password)
            return new Error('a senha não pode ser nula na criação de um usuário')

        password = await bcrypt.hash(password, 10)

        const user = repo.create({
            email: email,
            username: username ? username : '',
            tel: tel ? tel : '',
            password: password,
            created_at: new Date()
        })

        await repo.save(user)

        return user
    }
}