import mongoose from "mongoose";

try{
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Conectada la BD")
} catch (error){
    console.error(error.name + ': ' + error.message)
}