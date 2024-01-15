import { Token } from '../../adapters/auth';

const tokenPaths =["/health/", "/users/"]

export const tokenValidator = (req, res, next) => {
    const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
    if (token !== "undefined" && tokenPaths.includes(req.path.slice(0,7))){
        try {
            Token.verifyToken(token);
            next();
        }catch(err){
            next(err);
        }
    }else{
        next();
    }
};

