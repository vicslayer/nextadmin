import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q)=>{

    console.log(q);
    const regex = RegExp(q,"i");


    try{
        connectToDB();
        const users = await User.find({username: {$regex: regex}});
        
        return users;   
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};