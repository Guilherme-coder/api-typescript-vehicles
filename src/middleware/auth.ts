import jwt from 'jsonwebtoken'
const authConfig = require('../config/auth')

module.exports = (request, response, next) => {
    const authorization = request.headers.authorization

    if(!authorization)
        return response.status(401).json({ 'error': 'token não fornecido' })

    const authorizationSplit = authorization.split(" ")

    if(authorizationSplit.length !== 2)
        return response.status(401).json({ 'error': 'erro no token' })

    const [ scheme, token ] = authorizationSplit

    if(!/^Bearer$/i.test(scheme))
        return response.status(401).json({ 'error': 'erro no token' })

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) response.status(401).json({ 'error': 'token inválido' })

        request.userId = decoded.id
        return next()
    })
}