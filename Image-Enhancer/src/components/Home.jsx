import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import { enhancedImageAPI } from "../utils/EnhancedImageApi";

const Home = () => {
  const [uploaded, setUpload] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async(file) =>{
    setUpload(URL.createObjectURL(file));
    setLoading(true);
    try{
      // Call api
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL.image);
      setLoading(false);
    }
    catch(error){
      console.log(error);
      alert('Error while enhancing image try again later.!')
    }
  }

  // console.log(enhancedImage)

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler}/>
      <ImagePreview
        loading={loading}
        uploaded={uploaded}
        enhancedImage={enhancedImage}
      />
    </>
  );
};

export default Home;
