import express, { Request, Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
dotenv.config()
import { initDB } from "./utils/db"

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true ,
}))
app.use(cookieParser())



//api will be here
app.get("/" , (req: Request , res: Response)=> {
    try {
        res.status(200).json({
            message : "Root Api!!!" ,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message : "Internal server error!!!" ,
            success: false
        })
    }
})




const PORT = process.env.PORT! || 3333
const runServer = async ()=> {
    try {
       await initDB()
       app.listen(PORT ,()=> {
        console.log(`Server id runnig at http://localhost:${PORT}`)
    })
    } catch (error) {
        console.log(error)
    }
}
runServer()