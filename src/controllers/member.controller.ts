import { Request, Response } from "express";
import { T } from "../libs/types/comments"
import MemberService from '../models/Member.service'
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import { memberType } from "../libs/enums/member.enum";
import Errors from "../libs/Errors";

// React 
const memberService = new MemberService()
const memberController: T = {};


memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("User is redirected to Signup Page")
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input)
        res.json({member: result})
        // TODO: Token

    } catch (err) {
        console.log("Error, Signup", err)
        if(err instanceof Errors) res.status(err.code).json(err)
            else res.status(Errors.standard.code).json(Errors.standard)
    }
}

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("User is redirected to Login Page")
        const input: LoginInput = req.body,
            result = await memberService.login(input)
        res.json({member: result})
        // TODO: Token
    } catch (err) {
        console.log("Error, Login", err)
        res.send(err);
    }
}



export default memberController;