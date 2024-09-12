import { Cloudinary } from "@cloudinary/url-gen";

export const CloudinaryV2 = () => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "drdjybjuh",
    },
  });
  return cld;
};
