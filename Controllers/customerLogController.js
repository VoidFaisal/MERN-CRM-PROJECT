import { CustomAPIError } from "../Errors/customError.js";
import customerLog from "../Models/customerLog.js";

const createCustomerLog =async (req,res) =>
{
    const{interaction,date,time,description} = req.body
    try {
        const CustomerLog = await customerLog.create({interaction,date,time,description})
        if(!CustomerLog)
        {
            res.status(400).json({msg:"Something went wrong in customerlog while creating"})
        }
        res.status(200).json({msg:"customer log created"})

    } catch (error) {
        throw new CustomAPIError(error.message,400)
    }

}

const readCustomerLog = async (req,res) =>
{
    try {
        const CustomerLog = await customerLog.find()
        if(!CustomerLog)
        {
            res.status(400).json({msg:"Something went wrong in customerlog while reading"})
        }
        res.status(200).json({CustomerLog})

    } catch (error) {
        throw new CustomAPIError(error.message,400)
    }
}

const readSingleCustomerLog = async (req,res) =>
{const {id} = req.params
    try {
        const CustomerLog = await customerLog.findById(id)
        if(!CustomerLog)
        {
            res.status(400).json({msg:"Something went wrong in customerlog while reading single log"})
        }
        res.status(200).json({CustomerLog})

    } catch (error) {
        throw new CustomAPIError(error.message,400)
    }
}
const updateCustomerLog = async (req,res) =>
{
    const {id} = req.params
    const {interaction,date,time,description} = req.body
    try {
        const CustomerLog = await customerLog.findByIdAndUpdate(id,{interaction,date,time,description},{new:true,runValidators:true})
        console.log(CustomerLog);
        
        if(!CustomerLog)
        {
            res.status(400).json({msg:"Something went wrong in customerlog while updating"})
        }
        res.status(200).json({msg:"updated successfully"})

    } catch (error) {
        throw new CustomAPIError(error.message,400)
    }
}
const deleteCustomerLog = async (req,res) =>
{
    const {id} = req.params
    try {
        const CustomerLog = await customerLog.findByIdAndDelete(id)
        if(!CustomerLog)
        {
            res.status(400).json({msg:"Something went wrong in customerlog while deleting"})
        }
        res.status(200).json({msg:"deleted successfully"})

    } catch (error) {
        throw new CustomAPIError(error.message,400)
    }
}

export {createCustomerLog,readCustomerLog,readSingleCustomerLog,updateCustomerLog,deleteCustomerLog}