import mongoose from "mongoose";
import config from "../../config/index";
import { UserModel } from "./users/users.model";


let database: mongoose.Connection;

const DB_USER = config.dbUser;
const PASSWORD = config.dbPassword;
const DB_NAME = config.dbName;

export const connect = () => {
    // add your own uri below
    // const uri = "mongodb+srv://<username>:<password>@cluster0-v6q0g.mongodb.net/test?retryWrites=true&w=majority";
    const MONGO_URI = `mongodb+srv://${DB_USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;
    
    if (database) {
        return;
    }
    database = mongoose.connection;
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    database.once("open", async () => {
        console.log("Connected to database");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
    return {
        UserModel,
    };
};
export const disconnect = () => {
    if (!database) {
        return;
    }
    mongoose.disconnect();
};