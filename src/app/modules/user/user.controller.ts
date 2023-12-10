import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
   
    try {
        const user = req.body;
        const result = await UserServices.createUser(user);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Users are Here",
            data:result,
        })
    } catch (err) {
        console.log(err);
    }
};  


const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.getAllUserFromDB();
    
        res.status(200).json({
            success: true,
            message: "Users are Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}

const getSingleUser = async (req: Request, res: Response) => {
    try {

        const { userId } = req.params;
        const userIdNum = parseInt(userId);
        console.log(typeof userIdNum)
        const result = await UserServices.getSingleUserFromDB(userIdNum);
    
        res.status(200).json({
            success: true,
            message: "User Sigle Man Here",
            data:result,
        })

    } catch (err){
     console.log(err);   
    }
}


const updateUser = async (req: Request, res: Response) => {
    try {

        const { userId } = req.params;
        const userIdNum = parseInt(userId);

        const { user: updatedUserData } = req.body;

        const existingUser = await UserServices.getSingleUserFromDB(userIdNum);

        if(!existingUser){
            res.status(404).json({
                success: false,
                message: "User not found",
                data:null
            })
            return
        }

        const result = await UserServices.updateUserInDB(userIdNum,updatedUserData);
    
        const {  ...updatedUserWithoutPassword } = result?.toObject() || {};
        res.status(200).json({
            success: true,
            message: "User updated",
            data:updatedUserWithoutPassword,
        })

    } catch (err){
     console.log(err);   
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const userIdNum = parseInt(userId);



        // if the user exists 
        const existingUser = await UserServices.getSingleUserFromDB(userIdNum);

        if (!existingUser) {
            res.status(404).json({
                success: false,
                message: "This User not Found",
                data:null,
            })
        }


        const result = await UserServices.deleteUserFromDB(userIdNum);

        res.status(200).json({
            success: true,
            message: "user is deleted successfully",
            data:result,
        })

    } catch (err) {
        console.log(err);
    }
}

export const UserControllers = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
} 

