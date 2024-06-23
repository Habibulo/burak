import { Request, Response } from 'express';
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import Errors from '../libs/Errors';
import MemberService from '../models/Member.service';
import { T } from '../libs/types/comments';


const memberService = new MemberService()
const memberController: T = {}

//REACT



memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("Signup")

        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input)
        // TODO: Tokens

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
            result = await memberService.login(input)
        // TODO: Tokens

        res.json({ member: result })
    } catch (err) {
        console.log("Error, login", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)

    }
};

export default memberController