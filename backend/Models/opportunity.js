import mongoose from "mongoose";
 
const leadOpportunitySchema = new mongoose.Schema({
    lead_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
    },
    name:{
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxLength:[30,"name cannot be longer than thirty characters"]

    },
    value: {
        type:Number,
    required:true },
     stage:{
        type:String,
        required:true,
        enum:["qualification", "proposal", "negotiation",
            "closed"]
     },
     expected_close_date:{
        type:Date,
        required:true

     },
     
},{timestamps:true})

export default ('leadopportunity',leadOpportunitySchema)