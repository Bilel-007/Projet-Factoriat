const jwt=require('jsonwebtoken')
exports.authMiddleware=async (req,res,next)=>{
try{
    const token =req.headers.token;
    if(!token) res.status(401).json({msg:'you are not authorized.'})
    console.log(token);
    const verifyToken=jwt.verify(token,process.env.JWT_SECRET);
    req.personId = verifyToken.id;
    next();
}
catch(error){
    console.log(error)
    res.status(500).json({msg:'somthing went wrong!'})
    }
};

