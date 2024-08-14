import {CustomAPIError} from "../Errors/customError.js"
import jwtVerify from "../JWT/jwtVerify.js"

const auth = (req,res,next)=>
{
    const Authorization= req.headers.authorization
    if(!Authorization||!Authorization.startsWith("Bearer ")){
    throw new CustomAPIError("no token provided",401)
      }
      try { 
          const token = Authorization.split(" ")[1]
          const verify = jwtVerify(token);
          const {user_id,username,role} = verify
          req.user = {user_id,username,role}
          next()
        
      } catch (error) {
        throw new CustomAPIError(error.message,400)
      }
}

export default auth