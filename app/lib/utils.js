import mongoose from "mongoose";
export const connectToDB = async()=>{
    const connection={};
    try{
        if(connection.isConnected) return;
        const db = await mongoose.connect("mongodb+srv://probinsyanongitexpert:ghay2pRzMlGaJSiH@proit.eq1zfxi.mongodb.net/dashboard?retryWrites=true&w=majority");
        //const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected=db.connections[0].readyState;
    }
    catch(error){
        console.log(error);
        throw new Error(error);
    }
}