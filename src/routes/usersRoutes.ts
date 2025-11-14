import { Router } from "express";
import { getUsers } from "../controllers/usersController";

const router = Router();

router.get("/users", getUsers);

export default router;
