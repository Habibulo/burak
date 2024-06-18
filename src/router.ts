import express from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

/** Restaurant **/
// Home Page
// router.get("/", memberController.goHome);
// Login Page
router
    // .get("/login", memberController.login)
    .post("/login", memberController.login);
// Sign-up Page
router
    .post("/signup", memberController.signup);

/** Product **/
/** User **/

export default router;