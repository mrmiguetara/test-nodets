import * as Mongoose from "mongoose";

export const UserSchema = new Mongoose.Schema({
    firstName: String,
    lastName: String,
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

export const UserModel = Mongoose.model("User", UserSchema);
