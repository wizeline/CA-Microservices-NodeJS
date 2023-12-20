import jsonwebtoken from "jsonwebtoken";
import { constants } from 'http2';

const secretKey = "secret_key_value"

const generateToken = (admin_id, expires_in) => {
    return jsonwebtoken.sign({id: admin_id}, secretKey, {expiresIn:expires_in});
}

export const VerifyToken = (req, res, next) => {
    const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
    if (!token){
        jsonwebtoken.verify(token, secretKey);
    }
    next();
};

export const Token ={
    generateToken,
};