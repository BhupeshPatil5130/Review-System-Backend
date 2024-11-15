 import userModel from "../model/User.js";
 
 
 
 
 export const isAdmin =async (req,res,next)=>{
   
   try {
        const{email}=req.body;
       const userInfo= await userModel.findOne({email});

       if(userInfo && userInfo.role == 'Admin'){
            next();
       }else{
        res.status(403).json({
            message:"Access Denied,Only Admin can  access this"
        })
       }
        
    } catch (error) {
        res.statsu(500).json({
            message:`Error is ${error}`,
        })
    }


 }
 