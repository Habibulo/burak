import { memberStatus, memberType } from "../enums/member.enum";


export interface Member {
    memberType: memberType,
    memberStatus: memberStatus,
    memberNick: string, 
    memberPhone: string,
    memberPassword?: string,
    memberAdress?: string,
    memberDesc?: string,
    memberImage?: string,
    memberPoints: number,
    createdAt: Date,
    updatedAt: Date,
}

export interface MemberInput {
    memberType?: memberType,
    memberStatus?: memberStatus,
    memberNick: string, 
    memberPhone: string,
    memberPassword: string,
    memberAdress?: string,
    memberDesc?: string,
    memberImage?: string,
    memberPoints?: number,
}