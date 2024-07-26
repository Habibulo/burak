import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { memberStatus, memberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs"
import { shapeIntoMongooseObjectId } from "../libs/config";
class MemberService {
    private readonly memberModel;

    constructor (){
        this.memberModel = MemberModel;
    }

    /* SPA */
    public async getRestaurant(): Promise<Member> {
        const result = this.memberModel.findOne({ memberType: memberType.RESTAURANT }).lean().exec()
        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND)

        return result
    }

    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt)
        try {
            const result = await this.memberModel.create(input)
            result.memberPassword = ""
            return result.toJSON()
        } catch (err) {
            console.log("Error on model signup:", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK)
        }
    }
    public async login(input: LoginInput): Promise<Member> {
        // TODO: Consider member status later
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick},
                { _id: 1, memberNick: 1, memberPassword: 1, memberStatus: 1 }
            )
            .exec()
        
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NICK_NOT_FOUND)
        const isMatch = await bcrypt.compare
            (input.memberPassword, 
            member.memberPassword)
        console.log("isMatch:", isMatch);
        
        if(!isMatch) throw new Errors(HttpCode.UNAUTHORISED, Message.WRONG_PASSWORD)
        return await this.memberModel.findById(member._id).lean().exec()
    }
    public async getUsers(): Promise<Member[]> {
        const result = await this.memberModel
          .find({ memberType: memberType.USER })
          .exec();
        return result;
      }
    public async getMemberDetail(member: Member): Promise<Member> {
        const memberId = shapeIntoMongooseObjectId(member._id)
        const result = await this.memberModel.findOne({_id: memberId, memberStatus: memberStatus.ACTIVE}).exec()
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND)
        return result
    }
    public async updateChosenUser(input: MemberUpdateInput): Promise<Member> {
        input._id = shapeIntoMongooseObjectId(input._id);
        const result = await this.memberModel
          .findByIdAndUpdate({ _id: input._id }, input, { new: true })
          .exec();
        if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    
        return result;
      }
    public async updateMember(member: Member, input: MemberUpdateInput): Promise<Member> {
        const memberId = shapeIntoMongooseObjectId(member._id)
        const result = await this.memberModel
        .findOneAndUpdate({_id: memberId}, input, {new: true})
        .exec()
        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED)
        return result
    }
    public async addUserPoint(member: Member, point: number): Promise<Member> {
        const memberId = shapeIntoMongooseObjectId(member._id);

        return await this.memberModel
            .findOneAndUpdate(
                {
                    _id: memberId,
                    memberType: memberType.USER,
                    memberStatus: memberStatus.ACTIVE,
                },
                { $inc: { memberPoints: point } },
                { new: true }
            )
            .exec();
    }
    /* SSR */

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({memberType: memberType.RESTAURANT})
            .exec()
        console.log("exist:",exist)
        if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        
        console.log("before");
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt)
        console.log("after:", input.memberPassword);

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
                { memberNick: 1, memberPassword: 1 }
            )
            .exec()
        
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NICK_NOT_FOUND)
        const isMatch = await bcrypt.compare
            (input.memberPassword, 
            member.memberPassword)
        console.log("isMatch:", isMatch);
        
        // const isMatch = input.memberPassword === member.memberPassword
        if(!isMatch) throw new Errors(HttpCode.UNAUTHORISED, Message.WRONG_PASSWORD)
        console.log("memberdan nima kelyabdi", member);
        
        return await this.memberModel.findById(member._id).exec()
        // const result = await this.memberModel.findOne({memberNick: input.memberNick}).exec()
        // console.log("result", result) 
        // return result           
    }
    public async getTopUsers(): Promise<Member[]> {
        const result = await this.memberModel
            .find({
                memberStatus: memberStatus.ACTIVE,
                memberPoints: { $gte: 1 }
            })
            .sort({ memberPoints: -1 })
            .limit(4)

        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND)
        return result
    }
    
}
export default MemberService

