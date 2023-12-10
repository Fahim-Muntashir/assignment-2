import { Schema, model,  } from "mongoose";
import { User } from "./user.interface";

const userSchema = new Schema<User>({
    userId: { type: Number, unique: true },
    username: {
        type: String, unique: true,
    },
    password: String,
    fullName: {
        firstName: String,
        lastName: String,
    }
    ,
    age: Number,  
    email: String,
    isActive: Boolean,
    hobbies: [String],
    address: {
        street: String,
        city: String,
        country: String,
    }
})

const UserModel = model<User>('User', userSchema);

export default UserModel;