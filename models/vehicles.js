const mongoose=require("mongoose");

const Vehicle=mongoose.Schema({
friendly_name:{
    type:String,
    required:true,
},

id:{
    type:String,
    required:true,
    unique:true,
}
});

module.exports=mongoose.model("Vehicle",Vehicle);