import { Request, Response } from "express";
//importing our model
import { UserModel } from "../database/users/users.model";
import { Document } from 'mongoose';

export class UserService {
  public getAll(req: Request, res: Response) {
    const users = UserModel.find();

    res.status(200).json({users})
  }
}