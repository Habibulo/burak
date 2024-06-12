import { Request, Response } from "express";
import { T } from "../libs/types/comments"
const restaurantController: T = {};
import MemberService from "../models/Member.service";
import { memberType } from "../libs/enums/member.enum";
import { LoginInput, MemberInput } from "../libs/types/member";



restaurantController.goHome = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Home Page")
    res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome", err)
    }
}
// =======================================================================================
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Login Page")
    res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin", err)
    }
}
restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Login Process Page")
    console.log("body:" , req.body)
    const input: LoginInput = req.body
    const memberService = new MemberService()
    const result = await memberService.processLogin(input)
    
    res.send(result);
    } catch (err) {
        console.log("Error, getProcessLogin", err)
        res.send(err);
    }
}
// =======================================================================================
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
    console.log("User is redirected to Signup Page")
    res.send("Signup Page");
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

        const memberService = new MemberService()
        const result = await memberService.processSignup(newMember)
        res.send(result);

    } catch (err) {
        console.log("Error, getProcessSignup", err)
        res.send(err)
    }
}
// =======================================================================================

export default restaurantController;
