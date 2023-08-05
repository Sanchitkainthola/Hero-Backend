import mongoose from "mongoose";
const HeroSchema=new mongoose.Schema({
    title:{type:String,required:true,default:" "},
    tag1:{type:String,required:true,default:" "},
    tag2:{type:String,required:true,default:" "},
    tag3:{type:String,required:true,default:" "},
    image:{type:String,required:true,default:" "}

})

const HeroModel=mongoose.model("Hero",HeroSchema);

export default HeroModel;