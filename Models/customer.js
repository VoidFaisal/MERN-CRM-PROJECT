import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
   management_id:{
      type:String,
      required:true
   },
    name:{
        type:String,
        required:[true,"must provide name"],
        trim:true,
        maxLength:[30,"name cannot be longer than thirty characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Invalid email address format',
        },
      },
     phone_number:{
        type:String,
        required:true,
        minLength:[8,"password must have eight or more characters"]
     },
     company:
     {
        type:String,
        maxLength:[30,"company name should be not exceed 30 characters"],
        required:true
     },
     address:
     {
        type:String,
        required:true
        
     },
    industry: {
        type:String,
        required:true
     },
     notes:
     {
      type:String,
      required:true
     },

})

export default mongoose.model("customer",customerSchema)