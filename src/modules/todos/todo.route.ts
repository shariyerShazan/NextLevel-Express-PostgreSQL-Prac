import { Router } from "express";
import { TodoController } from "./todo.controller";
import { auth } from "../../middlewares/auth.middlewares";


const router = Router();

router.post("/", auth, TodoController.create);
router.get("/", auth, TodoController.getAll);

export default router;
