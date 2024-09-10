// Gets details of an uploaded image
export const getAssetInfo = async (publicId) => {
  // Return colors in the response
  const options = {
    colors: true,
  };
  try {
    // Get details about the asset
    const result = await cloudinary.api.resource(publicId, options);
    console.log(result);
    return result.colors;
  } catch (error) {
    console.error(error);
  }
};
