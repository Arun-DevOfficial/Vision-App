import jwt from "jsonwebtoken";

export const generatePasswordResetToken = (email) => {
  const token = jwt.sign(jwt, process.env.SECRET_KEY);
  return token;
};
