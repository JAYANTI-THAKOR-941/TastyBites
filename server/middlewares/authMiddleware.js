
export const isAdmin = (req,res,next)=>{
    if(req.session.userId && req.session.userRole === 'admin'){
        return next();
    }
    return res.status(403).json({message:"Access denied.Only admin access this route."});
}