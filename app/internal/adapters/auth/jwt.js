import jsonwebtoken from "jsonwebtoken";
import { defaultConfig } from "../../core/providers";

const generateToken = (admin_id, expires_in) => {
    return jsonwebtoken.sign({id: admin_id}, defaultConfig.security_key, {expiresIn:expires_in});
}

export const VerifyToken = (req, res, next) => {
    const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
    if (token !== "undefined"){
        try {
            jsonwebtoken.verify(token, defaultConfig.security_key);
            next();
        } catch(err){
            next(err);
        }
    }else{
        next();
    }
};

export const Token ={
    generateToken,
};