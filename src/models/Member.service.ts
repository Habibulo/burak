import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { memberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs"
class MemberService {
    private readonly memberModel;

    constructor (){
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({memberType: memberType.RESTAURANT})
            .exec()
        // console.log("exist:",exist)
        if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        
        // console.log("before");
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt)
        // console.log("after:", input.memberPassword);

        try {
            const result = await this.memberModel.create(input)
            result.memberPassword = ""
            return result 
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        }
    }
    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick},
                { _id: 0, memberNick: 1, memberPassword: 1 }
            )
            .exec()
        
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NICK_NOT_FOUND)
        const isMatch = await bcrypt.compare
            (input.memberPassword, 
            member.memberPassword)
        console.log("isMatch:", isMatch);
        
        // const isMatch = input.memberPassword === member.memberPassword
        if(!isMatch) throw new Errors(HttpCode.UNAUTHORISED, Message.WRONG_PASSWORD)
        
        return await this.memberModel.findOne(member._id).exec()
        // const result = await this.memberModel.findOne({memberNick: input.memberNick}).exec()
        // console.log("result", result) 
        // return result           
    }
}
export default MemberService

