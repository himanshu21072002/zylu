const mongoose=require("mongoose");

const Alert=mongoose.Schema({
id:{
    type:String,
    required:true,
    unique:true,
},

alert_type:{
    type:String,
    required:true,
},
vehicle_id:{
    type:String,
    required:true,
    unique:true,
},
driver_friendly_name:{
    type:String,
    required:true,
},
vehicle_friendly_name:{
    type:String,
    required:true,
},
timestamp:{
    type:Date,
    required:true,
}
});

module.exports=mongoose.model("Alert",Alert);