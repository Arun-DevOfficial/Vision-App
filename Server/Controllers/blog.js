// import Blog from "../Models/Blog";

//setup blog banner upload
export const handleBannerUpload = async (req, res) => {
  try {
    if (req.body) return res.json({ successMessage: "Data are received!" });
    throw new Error("Body Contains Nothing!");
  } catch (error) {
    res.json({ ErrorMessage: "Internal Server Error" });
  }
};
