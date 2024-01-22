import mongoose from "mongoose";


export const mongoDB = () => {
    mongoose.connect("mongodb://0.0.0.0/dashboard")
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}