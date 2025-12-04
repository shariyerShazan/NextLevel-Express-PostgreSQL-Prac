import { Router } from "express";
import { UserController } from "./user.controller";
import { auth } from "../../middlewares/auth.middlewares";


const router = Router();

router.get("/profile", auth, UserController.profile);

export default router;
