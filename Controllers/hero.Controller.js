import req from "express/lib/request.js";
import Hero from "../MongoDB/Models/hero.js";  //.js allways use 
import res from "express/lib/response.js";

const createHero= async(req,res)=>{
    try {
        const{title,tag1,tag2,tag3,image}=req.body;
        const newHero=await Hero.create({
            title,tag1,tag2,tag3,image
        });
        return res.status(200).json({message:"Hero added successfully",Hero: newHero});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getallHeroes= async(req,res)=>{
    try {
        const Heroes=await Hero.find();
        return res.status(200).json(Heroes);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getHerobyID= async(req,res)=>{
    try {
        const{id}=req.params;
        console.log(id);
        const hero=await Hero.findById({_id:id});
        if (hero){
            console.log(hero);
            return res.status(200).json(hero);
        }
        else{
            return res.status(404).json({message:"Hero not found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getHerobytitle=async(req,res)=>{
    try {
        const{title}=req.body;
        const hero=await Hero.find({title:title});
        if (hero){
            return res.status(200).json(hero);
        }
        else{
            return res.status(404).json({message:"Hero not found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateHero=async(req,res)=>{
    try {
        const{id}=req.params;
        const{title,tag1,tag2,tag3,image}=req.body
        const hero=await Hero.findById({_id:id});
        if (hero){
            await Hero.findByIdAndUpdate({_id:id},{
                title:title,
                tag1:tag1,
                tag2:tag2,
                tag3:tag3,
                image:image
            });
            const updatedHero=await Hero.findById({_id:id});
            return res.status(200).json({message:"Hero updated sucessfully", updatedHero:updatedHero})
        }
        else{
            return res.status(404).json({message:"Hero not found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteHero=async(req,res)=>{
    try {
        const{id}=req.params;
        //const{title,tag1,tag2,tag3,image}=req.body
        const hero=await Hero.findByIdAndDelete({_id:id});
        if (hero){
            await Hero.findByIdAndDelete({_id:id},{
                // title:title,
                // tag1:tag1,
                // tag2:tag2,
                // tag3:tag3,
                // image:image
            });
            const updatedHero=await Hero.findById({_id:id});
            return res.status(200).json({message:"Hero delate sucessfully", deleteHero:deleteHero})
        }
        else{
            return res.status(404).json({message:"Hero not found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



export {createHero,getallHeroes,getHerobyID,getHerobytitle, updateHero, deleteHero};

