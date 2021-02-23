import { Mongoose } from "mongoose";
import { Document } from 'mongoose'
interface IUser extends Document {
    firstName: String,
    lastName: String,
    age: Number,
    dateOfEntry: Date,
    lastUpdated: Date
}

export default IUser;