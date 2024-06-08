import { Request, Response } from "express";
import { T } from "../libs/types/comments"
const memberController: T = {};




memberController.goHome = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Home Page")
    res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome", err)
    }
}

memberController.getLogin = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Login Page")
    res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin", err)
    }
}

memberController.getSignup = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Signup Page")
    res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup", err)
    }
}


export default memberController;