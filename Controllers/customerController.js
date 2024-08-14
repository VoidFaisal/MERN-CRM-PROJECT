import customer from "../Models/customer.js";
import bcrypt from "bcrypt";
import jwtSign from "../JWT/jwtSign.js";
import jwtVerify from "../JWT/jwtVerify.js";

const registerController = async (req, res) => {
    try {
      const { username, email, password, company, address, industry } = req.body;
      const saltRounds = 10;
  console.log(password,saltRounds);
        // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create the customer with the hashed password
      const Customer = await customer.create({
        username,
        email,
        password: hashedPassword,
        company,
        address,
        industry
      });
  
      // Send a success response
      res.status(200).json({ msg: "User Added", data: Customer });
    } catch (error) {
      // Send an error response
      res.status(400).json({ msg: error.message });
    }
  };

const loginController = async (req, res) => {
  try {
    const { email,password } = req.body;
    console.log(password);
    
    const Customer = await customer.find({
      email: email
    });
    
    
    const hash = Customer[0].password;
    
    
    bcrypt.compare(password,hash,function(err,result){
        
        if(result)
        {
            console.log("Password Matched")
            const payload = {user_id:Customer[0]._id,username:Customer[0].username}
            const token = jwtSign(payload)
            res.status(200).json({ msg: "User Found",token:token });
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
