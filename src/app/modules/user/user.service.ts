import { User } from "./user.interface";
import UserModel from "./user.model";

const createUser = async(user: User) => {
   const result= await UserModel.create(user);
    return result;
}

const getAllUserFromDB = async () => {
    const result = await UserModel.find({},{ password: 0 })
    return result;
}

const getSingleUserFromDB = async (id:number) => {
    const result = await UserModel.findOne({ userId: id }, { password: 0 })
    return result;
}

const updateUserInDB = async (id: number, updatedUserData: User) => {

    const result = await UserModel.findOneAndUpdate({ userId: id }, updatedUserData, { new: true });
    return result;
}

const deleteUserFromDB = async (id: number) => {
    const result = await UserModel.findOneAndDelete({ userId: id })
    return result;
}

export const UserServices = {
    createUser,
    getAllUserFromDB,
    getSingleUserFromDB,
    updateUserInDB,
    deleteUserFromDB,
}