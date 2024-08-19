import jwt from "jsonwebtoken"

const jwtSign = (payload)=>{
   return  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1h"})
}

export default jwtSign;