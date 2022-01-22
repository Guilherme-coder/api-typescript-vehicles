import 'reflect-metadata'
import express from 'express'
import './database'
import { routes } from './routes'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(routes)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))