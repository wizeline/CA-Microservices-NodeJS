import jsonwebtoken from "jsonwebtoken";

const secretKey = "secret_key_value"

const generateToken = (admin_id) => {
    return jsonwebtoken.sign({id: admin_id}, secretKey, {expiresIn:'1h'});
}

const verifyToken = (token) => {
    try{
        let decoded = jsonwebtoken.verify(token, secretKey);
        return decoded;
    }catch(error){
        return null;
    }
}

export const Token ={
    generateToken,
    verifyToken,
};