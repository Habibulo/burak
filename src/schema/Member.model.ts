
import mongoose, { Schema } from 'mongoose';
import { memberStatus, memberType } from '../libs/enums/member.enum';

const memeberSchema = new Schema({
    memberType: {
        type: String,
        enum: memberType,
        default: memberType.USER
    },

    memberStatus: {
        type: String,
        enum: memberStatus,
        default: memberStatus.ACTIVE
    },

    memberNick: {
        type: String,
        index: { unique: true, sparse: true },
        required: true,
    },


    memberDesc: {
        type: String
    },

    memberPhone: {
        type: String,
        index: { unique: true, sparse: true },
        required: true,
    },

    memberPassword: {
        type: String,
        select: false,
        required: true,
    },

    memberAddress: {
        type: String,
    },

    memberImage: {
        type: String,
    },

    memberPoints: {
        type: Number,
        default: 0
    }

},
    { timestamps: true } // createdAt, updatedAt
)

export default mongoose.model('Member', memeberSchema)
