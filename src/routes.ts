import { Router } from "express"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { DeleteCategoryController } from "./controllers/DeleteCategoryController"
import { GetAllCategoryController } from "./controllers/GetAllCategoryController"
import { UpdateCategoryController } from "./controllers/UpdateCategoryController"

import { CreateCarController } from "./controllers/CreateCarController"

const routes = Router()

routes.post('/categories', new CreateCategoryController().handle)
routes.get('/categories', new GetAllCategoryController().handle)
routes.delete('/categories/:id', new DeleteCategoryController().handle)
routes.put('/categories/:id', new UpdateCategoryController().handle)

routes.post('/cars', new CreateCarController().handle)


export { routes }