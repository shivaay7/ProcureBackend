import Jwt  from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes Token Base for show data of the person who is logged in
export const requireSignIn = async (req,res,next)=>{
    try {
        const decode = Jwt.verify(req.headers.authorization , process.env.JWT_SECRET);
        req.user = decode;
        next()

    } catch (error) {
        console.log(error)
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        // Check if req.user exists and has the _id property
        if (!req.user || !req.user._id) {
            return res.status(401).send({
                message: 'Unauthenticated User',
                success: false,
            });
        }

        const user = await userModel.findById(req.user._id);

        if (!user || user.role !== 1) {
            return res.status(401).send({
                message: 'Unauthorized Access',
                success: false,
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Server Error',
            success: false,
        });
    }
};
0