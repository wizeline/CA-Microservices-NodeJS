import { Token } from '../../adapters/auth';

const tokenPaths ={
    "/health/": undefined,
    "/users/": undefined
};

export const isTokenValid = (req, res, next) => {
    const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
    if (token !== "undefined" && req.path.slice(0,7) in tokenPaths){
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

