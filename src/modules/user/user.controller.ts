import { Request, Response } from "express";
import { UserService } from "./user.service";

const creatUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.creatUser(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

export const UserController = {
  creatUser,
};
