export const defaultConfig = {
  auth: {
    securityKey: process.env.SECRET_KEY,
    expiresIn: process.env.EXPIRES_IN,
  },
};
