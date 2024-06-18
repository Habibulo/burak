import { Request, Response } from "express";
import { T } from "../libs/types/comments"
import MemberService from "../models/Member.service";
import { memberType } from "../libs/enums/member.enum";
import { LoginInput, MemberInput } from "../libs/types/member";

const restaurantController: T = {};
const memberService = new MemberService()

restaurantController.goHome = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Home Page")
    res.render("home");
    } catch (err) {
        console.log("Error, goHome", err)
    }
}
// =======================================================================================
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Login Page")
    res.render("login");
    } catch (err) {
        console.log("Error, getLogin", err)
    }
}
restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Login Process Page")
    console.log("body:" , req.body)
    const input: LoginInput = req.body
    const result = await memberService.processLogin(input)
    res.render("login");
    // TODO: Session Auth

    } catch (err) {
        console.log("Error, getProcessLogin", err)
        res.send(err);
    }
}
// =======================================================================================
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Signup Page")
    res.render("signup");
    } catch (err) {
        console.log("Error, getSignup", err)
    }
}
restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Signup Process Page")
    console.log("body:", req.body);
    const newMember: MemberInput = req.body
    newMember.memberType = memberType.RESTAURANT
    const result = await memberService.processSignup(newMember)
    res.render("signup");
    // TODO: Session Auth

    } catch (err) {
        console.log("Error, getProcessSignup", err)
        res.send(err)
    }
}
// =======================================================================================

export default restaurantController;
