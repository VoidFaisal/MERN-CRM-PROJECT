import mongoose from "mongoose";

const managementSchema = new mongoose.Schema({
  
    username:{
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
     password:{
        type:String,
        required:true,
        minLength:[8,"password must have eight or more characters"]
     },
     role:{
        type:String,
        enum:['admin','manager','sales representative'],
        default:'sale representative',
     }
    
})

export default mongoose.model("management",managementSchema)