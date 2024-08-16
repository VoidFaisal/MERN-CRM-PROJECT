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
const getSingleCustomer =async (req,res)=>
{
const {id} = req.params
const Customer = await customer.findById(id)
if(!Customer)
{
  res.status(400).json({msg:"No Data Found"})
}
res.status(200).json({Customer})
}
const getSingleManagement =async (req,res)=>
{
  const {id} = req.params
const Management = await management.findById(id)
if(!Management)
{
  res.status(400).json({msg:"No Data Found"})
}
res.status(200).json({Management})
}

const createCustomer = async (req,res)=>
{
  const { user_id,role } = req.user;
  
    
  if(role == 'sales representative' ){
    try {
      
      const management_id = user_id
      if(management_id){
        return console.log(management_id);
        
      }
      
      const {name,email,phone_number,company,address,industry,notes} = req.body
      const Customer = await customer.create({management_id,name,email,phone_number,company,address,industry,notes})
      if(Customer){
        res.status(200).json({msg:"Customer Created"})
      }
      
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }
  }
  if(role == 'manager'){
    try {
      const management_id = user_id
      const {name,email,phone_number,company,address,industry,notes} = req.body
      const Customer = await customer.create({management_id,name,email,phone_number,company,address,industry,notes})
      if(Customer){
        res.status(200).json({msg:"Customer Created"})
      }
      
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }}
  if(role == 'admin'){
    try {
      const management_id = user_id
      const {name,email,phone_number,company,address,industry,notes} = req.body
      const Customer = await customer.create({management_id,name,email,phone_number,company,address,industry,notes})
      if(Customer){
        res.status(200).json({msg:"Customer Created"})
      }
      
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }}
}

const updateCustomer =async (req,res) =>
{
  const { user_id, role } = req.user;
  if(role == 'sales representative'){
    try {
      const{id} = req.params
      
      const Customer = await customer.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
      if(Customer){
        res.status(200).json({msg:"Customer updated"})
      }
      
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }
  }
  if(role == 'manager'){
    try {
      const{id} = req.params
      
      const Customer = await customer.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
      if(Customer){
        res.status(200).json({msg:"Customer updated"})
      }
      
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }}
  if(role == 'admin'){
    try {
      const{id} = req.params
      
      const Customer = await customer.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
      if(Customer){
        res.status(200).json({msg:"Customer updated"})
      }
      
    } catch (error) {
      throw new CustomAPIError(error.message,400)
    }}
}

const deleteCustomer =async (req,res) =>
{
  const { user_id, role } = req.user;
const {id} = req.params
if(role=="admin" && id)
{
  try {
    const Customer = await customer.findByIdAndDelete(id);
    if(!Customer)
    {
      res.status(404).json({msg:"Data Does Not Exists "})    
    }
    res.status(200).json({msg:"Data Deleted Successfully"})
  } catch (error) {
    throw new CustomAPIError(error.message,400)
  }
}
else{
  res.status(400).json({msg:"You are not admin"})
}
}
export { admin,updateUser,deleteUser,createCustomer,updateCustomer,deleteCustomer,getSingleCustomer,getSingleManagement }
