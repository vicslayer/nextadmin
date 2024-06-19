import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q,page)=>{

    const regex = RegExp(q,"i");
        
    try{
        connectToDB();
        const count= await User.find({username: {$regex: regex}}).count();
        const users = await User.find({username: {$regex: regex}}).limit(process.env.NEXT_PUBLIC_ITEMPERPAGE).skip(process.env.NEXT_PUBLIC_ITEMPERPAGE * (page-1));
       
        return {count,users};
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};