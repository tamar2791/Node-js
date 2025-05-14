import { getAllUsers, login, signUp, updateUser } from "../controllers/users.controller.js";
import { Router } from "express";
import { auth } from "../middleweres/checkAuth.middleware.js";
import { authAdmin } from "../middleweres/checkAdmin.middleware.js";

const router = Router();

router.get("/", auth, authAdmin, getAllUsers);
router.post("/log-in", login);
router.post("/sign-up", signUp);
router.put("/:id", auth, updateUser);

export default router;