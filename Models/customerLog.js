import mongoose from "mongoose"

const customerLogSchema = new mongoose.Schema({
    interaction:{
        type:String,
        enum:['meeting','call','email'],
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:
    {
        type: String,
        validate: {
          validator: function (v) {
            if (!v) {
              return true;
            }
            return /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i.test(v);
          },
          message: (props) => `${props.value} is not a valid time in AM/PM format!`,
        },
        
    },
    description:
    {
        type:String,
        default:null
    }
})

export default mongoose.model('customerlog',customerLogSchema)