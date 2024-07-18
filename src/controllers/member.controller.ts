import { NextFunction, Request, Response } from 'express';
import { ExtendedRequest, LoginInput, Member, MemberInput } from '../libs/types/member';
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

        res.cookie("accessToken", token, {
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
        
        res.cookie("accessToken", token, {
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


memberController.logout = (req: ExtendedRequest, res: Response) => {
    try {
        console.log("member logout")
        res.cookie("accessToken", null, {maxAge: 0, httpOnly: true})
        res.status(HttpCode.OK).json({logout: true})
    } catch (err) {
        console.log("Error, UserLogout", err);
        if(err instanceof Errors) res.status(err.code).json(err)
            else res.status(Errors.standard.code).json(Errors.standard)
    }
};
memberController.verifyAuth = async (
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies["accessToken"]
        if(token) req.member = await authService.checkAuth(token)
        if(!req.member) throw new Errors(HttpCode.UNAUTHORISED, Message.NOT_AUTHENTICATED)
        next()
    }
    catch (err) {
    console.log("Error verifyAuth for User", err);
    if(err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}

memberController.retrieveAuth = async (
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies["accesToken"]
        if(token) req.member = await authService.checkAuth(token)
        next()
    }
    catch (err) {
    console.log("Error verifyAuth for User", err);
    next()
    }
}
export default memberController