import express from "express"
import connect_db from "./DB/connect_db.js"
import dotenv from"dotenv";
import managementrouter from "./Routes/managementRoute.js";
import customerrouter from "./Routes/customerRoute.js"
import adminrouter from "./Routes/adminRoute.js"
dotenv.config()
const app = express()
const port = process.env.PORT||3000
app.use(express.json())


app.use("/crm",managementrouter,customerrouter,adminrouter)

const start = async () =>
{
    try {
        const connection = await connect_db(process.env.MONGO_URI)
        if(connection){
            console.log("DB connected Successfully")
        }
        app.listen(port,console.log(`app is listening on http://localhost:${port}...`)
        )
    } catch (error) {
        console.log(error);
        
    }
}
start()