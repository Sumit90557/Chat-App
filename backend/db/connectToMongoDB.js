import mongoose from "mongoose";


const connectToMongoDB = async()=>{
    try {
         await mongoose.connect(process.env.MONGO_DB_URL) ; 
         console.log("connected to mnggodb") ; 
    } catch (error) {
        console.log("error connecting to mongoDB" , error) ; 
    }
}

export default connectToMongoDB ; 