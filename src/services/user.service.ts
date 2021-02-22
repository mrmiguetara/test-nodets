import { NextFunction, Request, Response } from "express";
//importing our model
import { UserModel } from "../database/users/users.model";
import { Document } from 'mongoose';

export class UserService {
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserModel.find({});
  
      res.status(200).json({users})
    } catch (error) {
      next(error)
    }
  }
}