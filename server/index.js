import {app, io ,httpServer} from "./sockets/index.js"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import { body } from "express-validator"
async function main(){
    await mongoose.connect(process.env.PORT);
}
main().then(()=>{
    console.log("db connected")
}).catch(err=>{
   console.log(err.message)
})
app.use(cors({
    origin:process.env.ORIGIN,
    methods:["GET","PUT","POST","PATCH","DELETE"],
    credentials:true,
    

}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

httpServer.listen(process.env.PORT || 3000 ,()=>{
    console.log("server started")
})

