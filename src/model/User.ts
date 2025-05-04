import mongoose, {Schema, Document} from "mongoose"

export interface Disease extends Document{
    content: string;
    createdAt: Date
}

const DiseaseSchema: Schema<Disease> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})
                                                                                                                  
export interface User extends Document{
    username: string;
    email: string;
    password: string;
    // verifyCode: string;
    // verifyCodeExpiry: Date;
    // isVerified: boolean;
    // isAcceptingMessages: boolean;
    diseases: Disease[]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is Required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, "please use a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    // verifyCode: {
    //     type: String,
    //     required: [true, "Verification Code is required"]
    // },
    // verifyCodeExpiry: {
    //     type: Date,
    //     required: [true, "Verification Code Expiry is required"]
    // },
    // isVerified: {
    //     type: Boolean,
    //     default: false
    // },
    // isAcceptingMessages: {
    //     type: Boolean,
    //     default: true
    // },
    diseases: [DiseaseSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) 
    || mongoose.model<User>("User", UserSchema)
export default UserModel;