import mongoose from "mongoose";
 
const leadManagementSchema = new mongoose.Schema({
    management_id:{
    type:mongoose.Schema.Types.ObjectId,
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
        type:Number,
        required:true,
        minLength:[8,"password must have eight or more characters"]
     },
     source:{
        type:String,
        required:true
     },
     status:{
        type:String,
        enum:['new','in progress','converted','lost']
     },
     
},{timestamps:true})

export default ('leadmanagement',leadManagementSchema)