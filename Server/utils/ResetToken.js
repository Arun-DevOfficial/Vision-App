import jwt from "jsonwebtoken";

export const generatePasswordResetToken = (email) => {
  const token = jwt.sign(email, process.env.SECRET_KEY, { expiresIn: "1h" });
  return token;
};

export const verifyPasswordResetToken = async () => {
  const token = req.body.token;
  const user = await User.findOne({ resetToken: token });
  if (!user) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
  return user;
};