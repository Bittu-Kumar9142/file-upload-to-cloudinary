import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { upload } from "./middlewares/multer.js";
import { uploadToCloudinary } from "./middlewares/cloudinery.js";

const app = express()
const port = 5000

app.post("/",upload.single('file'), async(req,res)=>{
const result = await uploadToCloudinary(req.file.path)
console.log(result. secure_url)
res.json({message:"kam ho gaya"})
})   

app.listen(port, ()=>{
    console.log("server listing on port", port)
})