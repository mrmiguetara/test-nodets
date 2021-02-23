import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/http.error";

export function handleErrors(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { status = 500, message } = err;
  console.log('from handler')
  return res.status(status).json({message});
}