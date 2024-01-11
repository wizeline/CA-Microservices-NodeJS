import jsonwebtoken from "jsonwebtoken";
import { defaultConfig } from "../../core/providers";

const generateToken = (admin_id, expires_in) => {
    return jsonwebtoken.sign({id: admin_id}, defaultConfig.security_key, {expiresIn:expires_in});
}

const verifyToken = (token) => {
    return jsonwebtoken.verify(token, defaultConfig.security_key);
};

export const Token ={
    generateToken,
    verifyToken
};