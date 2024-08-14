import CustomAPIError from "./customError.js"
const errorHandler = (err,req,res) =>
{
if(err instanceof CustomAPIError){
res.status(err.statusCode).json({error:err.message})
}
res.status(400).json({msg:"Something went wrong"})
}

export default errorHandler