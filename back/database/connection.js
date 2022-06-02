import mongoose from "mongoose";

try{
    await mongoose.connect(process.env.URI_MONGO);
} catch (e){
    console.error(e.name + ': ' + e.message)
}