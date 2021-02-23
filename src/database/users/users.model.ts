import * as Mongoose from "mongoose";
import IUser from "../../interfaces/user.interface";

export const UserSchema = new Mongoose.Schema({
    firstName: {type: String, required: [true, "First name is required."]},
    lastName: {type: String, required: [true, "Lastname is Required"]},
    age: Number,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
})

export const UserModel = Mongoose.model<IUser>("User", UserSchema);
