import express from "express"
// import mongoose from "mongoose"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import cors from "cors"
const app = express()
// import {User} from "../src/models/user.model.js"

dotenv.config({
    path: "./env"
})

app.use(cors())
app.use(express.urlencoded({extended: true}))


connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(` server is running at Port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("mongodbn connection failed !!! ", error);
})



/*
const myfun= async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        mongoose.connection.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
}

myfun()

app.post("/", async(req, res)=>{
    console.log("req.body: ",req.body);
    const data = new User(req.body)
    const response = await data.save();
    res.status(200).send({"message": "all good", data: response})
} )
    */