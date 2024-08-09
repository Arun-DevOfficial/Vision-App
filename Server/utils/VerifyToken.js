const verifyPasswordResetToken = async () => {
  const token = req.body.token;
  const user = await User.findOne({ resetToken: token });
  if (!user) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
  return user;
};
