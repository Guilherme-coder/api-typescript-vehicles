import { Router } from "express"
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController"
import { DeleteCategoryController } from "./controllers/Category/DeleteCategoryController"
import { GetAllCategoryController } from "./controllers/Category/GetAllCategoryController"
import { UpdateCategoryController } from "./controllers/Category/UpdateCategoryController"

import { CreateCarController } from "./controllers/Cars/CreateCarController"
import { GetAllCarsController } from "./controllers/Cars/GetAllCarsController"
import { GetCarByIdController } from "./controllers/Cars/GetCarByIdController"
import { UpdateCarController } from "./controllers/Cars/UpdateCarController"
import { DeleteCarController } from "./controllers/Cars/DeleteCarController"

const routes = Router()

routes.post('/categories', new CreateCategoryController().handle)
routes.get('/categories', new GetAllCategoryController().handle)
routes.delete('/categories/:id', new DeleteCategoryController().handle)
routes.put('/categories/:id', new UpdateCategoryController().handle)

routes.post('/cars', new CreateCarController().handle)
routes.get('/cars', new GetAllCarsController().handle)
routes.get('/cars/:id', new GetCarByIdController().handle)
routes.put('/cars/:id', new UpdateCarController().handle)
routes.delete('/cars/:id', new DeleteCarController().handle)


export { routes }