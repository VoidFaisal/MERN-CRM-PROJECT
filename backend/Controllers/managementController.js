import management from "../Models/management.js";
import bcrypt from "bcrypt";
import jwtSign from "../JWT/jwtSign.js"
import { CustomAPIError } from "../Errors/customError.js";

const registerController = async (req, res) => {
  try {
    let { username, email, password,role } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        
        const Management = management.create({ username:username, email:email, password:hash,role });
        res.status(200).json({ msg: "User Added",data:Management.message });
    });
  } catch (error) {
    throw new CustomAPIError(error.message,400)
  }
};

const loginController = async (req, res) => {
  try {
    const { email,password } = req.body;
    console.log(password);
    
    const Management = await management.find({
      email: email
    });
    const hash = Management[0].password;
    
    bcrypt.compare(password,hash,function(err,result){
        
        if(result)
        {
            console.log("Password Matched")
            const userData = Management[0];
            const payload = {user_id:userData._id,username:userData.username,role:userData.role}
            const token =jwtSign(payload)
            res.status(200).json({ msg: "User Found",token});
        }
        else{
            console.log("Incorrect Password",err);
            
        }
    })
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export { registerController, loginController };
