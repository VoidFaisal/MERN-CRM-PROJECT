import express from "express"
import "express-async-errors"
import connect_db from "./DB/connect_db.js"
import dotenv from"dotenv";
import managementrouter from "./Routes/managementRoute.js";
import leadrouter from "./Routes/leadManagementRoute.js"
import leadopportunityrouter from "./Routes/leadOpportunityRoute.js"
import adminrouter from "./Routes/adminRoute.js"
import logrouter from "./Routes/customerLogRoute.js"
import notFound from "./Errors/notFound.js";
import errorHandler from "./Errors/errorHandler.js";
dotenv.config()
const app = express()
const port = process.env.PORT||3000
app.use(express.json())


app.use("/crm",managementrouter,adminrouter)
app.use("/crm",logrouter,leadrouter,leadopportunityrouter)

// middleware
app.use(notFound)
app.use(errorHandler)

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