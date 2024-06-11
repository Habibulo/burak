import { Request, Response } from "express";
import { T } from "../libs/types/comments"
const restaurantController: T = {};
import MemberService from "../models/Member.service";



restaurantController.goHome = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Home Page")
    res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome", err)
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Login Page")
    res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin", err)
    }
}


restaurantController.processLogin = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Login Process Page")
    res.send("Login Process Page");
    } catch (err) {
        console.log("Error, getProcessLogin", err)
    }
}


restaurantController.processSignup = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Signup Process Page")
    res.send("Signup Process Page");
    } catch (err) {
        console.log("Error, getProcessSignup", err)
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Signup Page")
    res.send("Signup Page");
    } catch (err) {
        console.log("Error, getSignup", err)
    }
}


export default restaurantController;