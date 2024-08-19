import jwt from "jsonwebtoken";

const jwtVerify = (token) =>
{
    return jwt.verify(token,process.env.JWT_SECRET)
}

export default jwtVerify