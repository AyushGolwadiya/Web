import React from "react";

const ImageUpload = (props) => {

  const showImageHandler = (e) =>{
    const file = e.target.files[0];
    if(file){
      props.UploadImageHandler(file);
    }

  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileinput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 hover:text-gray-900 transition-all"
      >
        <p className="text-lg fong-medium text-gray-600">
          Click or drag to upload your Image
        </p>
        <input type="file" id="fileinput" className="hidden" onChange={showImageHandler}/>
      </label>
    </div>
  );
};

export default ImageUpload;
