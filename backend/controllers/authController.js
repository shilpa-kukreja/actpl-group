
import jwt from "jsonwebtoken";

const adminlogin = (req, res)=>{
      try {
        const {email,password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const aToken = jwt.sign(email+password,process.env.JWT_SECRET_KEY);
             return res.status(200).json({ success: true,aToken});
        }
        else{
            res.status(401).json({error:"Unauthorized"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
      }
}

export default adminlogin;