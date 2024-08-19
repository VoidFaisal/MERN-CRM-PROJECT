import leadManagement from "../Models/leadManagement.js";

const creatLead = async (req,res) =>
{
    const {user_id,role} = req.user
    if(role == 'sales representative'){
        management_id = user_id
        const {name,email,phone_number,source,status}=req.body
        try {
            const Lead = await leadManagement.create({management_id,name,email,phone_number,source,status})
            if(Lead)
            {
                res.status(200).json({msg:"Lead Created"})
            }
            res.status(404).json({msg:"no lead created"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }

}
const viewLead = async (req,res) =>
{
    const {user_id,role} = req.user
    if(role == 'sales representative'){
        management_id = user_id
        try {
            const Lead = await leadManagement.findById(management_id)
            if(Lead)
            {
                res.status(200).json({Lead})
            }
            res.status(404).json({msg:"no data found"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }
    if(role == 'manager || admin'){
        management_id = user_id
        try {
            const Lead = await leadManagement.find()
            if(Lead)
            {
                res.status(200).json({Lead})
            }
            res.status(404).json({msg:"no data found"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }

}

const updateLead =async (req,res)=>
{
    const {user_id,role} = req.user
    if(role == 'sales representative'){
        const {id} = req.params
        const {name,email,phone_number,source,status}=req.body
        try {
            const Lead = await leadManagement.findByIdAndUpdate(id,{name,email,phone_number,source,status})
            if(Lead)
            {
                res.status(200).json({msg:"Updated Successfully"})
            }
            res.status(404).json({msg:"no data found"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }
}
const deleteLead =async (req,res)=>
{
    const {user_id,role} = req.user
    if(role == 'admin'){
        const {id} = req.params
               try {
            const Lead = await leadManagement.findByIdAndDelete(id)
            if(Lead)
            {
                res.status(200).json({msg:"Deleted Successfully"})
            }
            res.status(404).json({msg:"no data found"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }
}
const filteredlead =async (req,res)=>
{
    const {status,representative}=req.query
    const queryObject = {}
    if(status){
        queryObject.status={status}

    }
    if(representative)
    {
        queryObject.management_id={representative}
    }
    
    const Lead = await leadManagement.find(queryObject)
    if(Lead)
    {
        res.status(200).json({Lead})
    }
    res.status(400).json({msg:"no data found"})
}
export {creatLead,viewLead,updateLead,deleteLead}