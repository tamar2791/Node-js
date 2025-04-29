import { arrUsers } from "../users.js";
import { Router } from "express";

const router = Router();

router.post("/log-in", (req, res) => {
    const { user} = req.body;
    const u = arrUsers.find((x) => x.name == user && x.password == user.password);
    if (!u) {
        return res.status(401).send("Invalid name or password");
    }
    res.json({ message: "Login successful", user });
});
router.post("/sign-up", (req, res) => {
    const {user}=req.body
    const u = arrUsers.find((u) => u.name == user.name);
    if (u) {
        return res.status(400).send("User already exists" );
    }
    const newUser = { id: arrUsers.length + 1,...user };
    arrUsers.push(newUser);
    res.status(201).json(newUser);
});
export default router;