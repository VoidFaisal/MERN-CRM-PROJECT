import leadOpportunity from "../Models/opportunity.js";

const creatLeadOpportunity = async (req,res) =>
{
    const {user_id,role} = req.user
    if(role == 'sales representative'){
        const {id} =req.params
        const {name,value,stage,expected_close_date}=req.body
        try {
            const Lead = await leadOpportunity.create({lead_id:id,name,value,stage,expected_close_date})
            if(Lead)
            {
                res.status(200).json({msg:"Lead Opportunity Created"})
            }
            res.status(404).json({msg:"no lead opportunity created"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }

}
const viewLeadOpportunity = async (req,res) =>
{

    const {id} =req.params
   

        try {
            const Lead = await leadOpportunity.find({lead_id:id})
            if(Lead)
            {
                res.status(200).json({Lead})
            }
            res.status(404).json({msg:"no lead opportunity found"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }
const updateLeadOpportunity = async (req,res) =>
{

    const {id} =req.params
   
    const {name,value,stage,expected_close_date}=req.body
        try {
            const Lead = await leadOpportunity.findByIdAndUpdate({lead_id:id},{name,value,stage,expected_close_date})
            if(Lead)
            {
                res.status(200).json({msg:"updated successfully"})
            }
            res.status(404).json({msg:"no lead opportunity found"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }
const deleteLeadOpportunity = async (req,res) =>
{

    const {id} =req.params
   

        try {
            const Lead = await leadOpportunity.findByIdAndDelete({lead_id:id})
            if(Lead)
            {
                res.status(200).json({msg:"deleted successfully"})
            }
            res.status(404).json({msg:"no lead opportunity found"})
        } catch (error) {
            throw new CustomAPIError(error.message,400)
            
        }
    }

    export {
        creatLeadOpportunity,viewLeadOpportunity,updateLeadOpportunity,deleteLeadOpportunity
    }