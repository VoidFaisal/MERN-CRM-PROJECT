import {CustomAPIError} from "../Errors/customError.js";
import customer from "../Models/customer.js";
import management from "../Models/management.js";

const admin = async (req, res) => {
  const { user_id, username, role } = req.user;
  if (role == "admin") {
    try {
      const customerData = await customer.find();
      const managementData = await management.find();
      // console.log(managementData.filter((data)=>user_id==data._id));
      
      res.status(200).json({ customerData, managementData });
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }
  }
  if(role=="manager")
  {
    try {
      const customerData = await customer.find({management_id:user_id});
      res.status(200).json({ customerData});
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }
  }
  if(role=="sales representative")
  {
    try {
      const customerData = await customer.find({management_id:user_id});
      res.status(200).json({ customerData});
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }
  }
};

const updateUser = async (req,res)=>
{
  const { user_id, username, role } = req.user;
const {id} = req.params
if(role=="admin" && id)
  {
  const user = req.body
  try {
    const Management = await management.findByIdAndUpdate(id,user,{new:true,runValidators:true});
    res.status(200).json({msg:"Data Updated Successfully"})
  } catch (error) {
    throw new CustomAPIError(error.message,400)
  }
}else
res.status(400).json({msg:"No Data Found"})
}
const deleteUser = async (req,res)=>
{
  const { user_id, username, role } = req.user;
const {id} = req.params
if(role=="admin" && id)
{
  try {
    const Management = await management.findByIdAndDelete(id);
    if(!Management)
    {
      res.status(404).json({msg:"Data Does Not Exists "})    
    }
    res.status(200).json({msg:"Data Deleted Successfully"})
  } catch (error) {
    throw new CustomAPIError(error.message,400)
  }
}else
res.status(400).json({msg:"No Data Found"})
}

export { admin,updateUser,deleteUser }
