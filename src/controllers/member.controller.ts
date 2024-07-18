import { Request, Response } from 'express';
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import Errors from '../libs/Errors';
import MemberService from '../models/Member.service';
import { T } from '../libs/types/comments';
import AuthService from '../models/Auth.service';


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
        res.json({ member: result })


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
        token = await authService.createToken(result)
        // TODO: Tokens
        console.log("yaratilgan token", token);
        
        res.json({ member: result })
    } catch (err) {
        console.log("Error, login", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)

    }
};


export default memberController