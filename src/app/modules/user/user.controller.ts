import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async(req:Request, res:Response) => {
   try {
    const user = req.body;
    const result = await UserServices.createUser(user);

    res.status(200).json({
        success: true,
        message: "Student Is Created Successfullly",
        data:result
    })
   } catch (err) {
    console.log(err);
   }
}

export const UserControllers = {
    createUser,
} 
