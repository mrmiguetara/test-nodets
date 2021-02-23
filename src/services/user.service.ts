// import { NextFunction, Request, Response } from "express";
//importing our model
import { UserModel } from "../database/users/users.model";
import { Document, Error, ObjectId } from 'mongoose';
import IUser from "../interfaces/user.interface";
import { HttpError } from '../errors/http.error';

export class UserService {
  public getAll(): Promise<IUser[]>{
    return UserModel.find({}).exec();
  }

  public async get(id: string): Promise<IUser|null> {
    return UserModel.findById({_id: id}).exec();

  }

  public create(user: IUser): Promise<IUser> {
    const newUser = new UserModel(user);
    return newUser.save();
  }
  
}