import customer from "../Models/customer.js";
import management from "../Models/management.js"

const admin = async(req,res)=>
    {
        try {
            const customerData = await customer.find();
            const managementData = await management.find();
            res.status(200).json({customerData,managementData})    
        } catch (error) {
            res.status(400).json({error_message:error.message})
        }
        
    }

    export {admin}