import { NextFunction, Request, Response } from 'express';
import { AdminRequest, LoginInput, Member, MemberInput } from '../libs/types/member';
import Errors, { HttpCode, Message } from '../libs/Errors';
import MemberService from '../models/Member.service';
import { T } from '../libs/types/comments';
import AuthService from '../models/Auth.service';
import { AUTH_TIMER } from '../libs/config';
import { memberType } from '../libs/enums/member.enum';


const memberService = new MemberService()
const authService = new AuthService()
const memberController: T = {}

//REACT



memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("Signup")

        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input),
        // TODO: Tokens
        token = await authService.createToken(result)

        res.cookie("accesToken", token, {
            maxAge: AUTH_TIMER*3600*1000,
            httpOnly: false
        })
        res.status(HttpCode.CREATED).json({ member: result, accessToken: token })
    } catch (err) {
        console.log("Error, signup", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)


    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("Login")
        const input: LoginInput = req.body,
        result = await memberService.login(input),
        
        // TODO: Tokens
        token = await authService.createToken(result)
        
        res.cookie("accesToken", token, {
            maxAge: AUTH_TIMER*3600*1000,
            httpOnly: false
        })

        res.status(HttpCode.OK).json({ member: result, accessToken: token })
    } catch (err) {
        console.log("Error, login", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)

    }
};


memberController.verifyAuth = async (
    req: Request,
    res: Response,
) => {
    try {
        let member = null
        const token = req.cookies["accesToken"]
        if(token) member = await authService.checkAuth(token)
        if(!member) throw new Errors(HttpCode.UNAUTHORISED, Message.NOT_AUTHENTICATED)
        res.status(HttpCode.OK).json({ member: member })
    }
    catch (err) {
    console.log("Error verifyAuth for User", err);
    if (err instanceof Errors) res.send(err.code).json(err)    
    }
}

export default memberController