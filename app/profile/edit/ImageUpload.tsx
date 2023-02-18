"use client";
import { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dkiulgdxq/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "nextAuthChallenge";

export default function ImageUpload({
  id,
  Uimage,
}: {
  id: string;
  Uimage: string;
}) {
  const [image, setImage] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file || null);
  };

  const handleImageUpload = () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "TU_FOLDER_EN_CLOUDINARY");
    formData.append("public_id", uuidv4());

    axios
      .post<{ secure_url: string }>(CLOUDINARY_UPLOAD_URL, formData)
      .then((response) => {
        setUploadedImage(response.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.post("http://localhost:3000/api/user", {
      image: uploadedImage,
      id: id,
    });
  };

  return (
    <div className=" ">
      <label className="cursor-pointer w-full flex items-center justify-between">
        <span className={(uploadedImage && "hidden") || ""}>
          Seleccionar <br /> imagen
        </span>

        <input className="hidden" type="file" onChange={handleImageChange} />
        <button
          className={` mx-8 disabled:bg-gray-400 text-white bg-blue-500 active:bg-blue-600 rounded-lg p-2 `}
          onClick={handleImageUpload}>
          Subir imagen
        </button>
      </label>
      {uploadedImage && (
        <img
          className="w-14 h-14 rounded-lg cursor-pointer "
          src={uploadedImage}
          alt="Uploaded"
        />
      )}
    </div>
  );
}
