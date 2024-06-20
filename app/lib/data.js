import { User } from "./models";
import { Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q,page)=>{

    const regex = RegExp(q,"i");
        
    try{
        connectToDB();
        const count= await User.find({username: {$regex: regex}}).count();
        const users = await User.find({username: {$regex: regex}}).limit(parseInt(process.env.NEXT_PUBLIC_ITEMPERPAGE)).skip(parseInt(process.env.NEXT_PUBLIC_ITEMPERPAGE) * (page-1));
       
        return {count,users};
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

export const fetchProducts = async (q,page)=>{

    const regex = RegExp(q,"i");
        
    try{
        connectToDB();
        const count= await Product.find({title: {$regex: regex}}).count();
        const products = await Product.find({title: {$regex: regex}}).limit(parseInt(process.env.NEXT_PUBLIC_ITEMPERPAGE)).skip(parseInt(process.env.NEXT_PUBLIC_ITEMPERPAGE) * (page-1));
       
        console.log(products);
        return {count,products};
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch products!");
    }
};