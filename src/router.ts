import express from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

// Home Page
router.get("/", memberController.goHome);

// Login Page
router.get("/login", memberController.getLogin);

// Sign-up Page
router.get("/signup", memberController.getSignup);

export default router;
