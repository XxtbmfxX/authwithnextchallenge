"use client";
import { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dkiulgdxq/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "nextAuthChallenge";

export default function ImageUpload({ id }: { id: string }) {
  const [image, setImage] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file || null);

    const reader = new FileReader();

    reader.onload = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "nextAuthChallenge");
    formData.append("public_id", uuidv4());

    await axios
      .post<{ secure_url: string }>(CLOUDINARY_UPLOAD_URL, formData)
      .then((response) => {
        setUploadedImage(response.data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (uploadedImage) {
    axios.post("http://localhost:3000/api/userImage", {
      image: uploadedImage,
      id: id,
    });
  }

  return (
    <div className="flex items-center ">
      <label className="cursor-pointer w-full flex items-center justify-between">
        <span className={(imageSrc && "hidden") || ""}>
          Select <br /> image
        </span>
        {imageSrc && (
          <img
            src={typeof imageSrc === "string" ? imageSrc : ""}
            className="w-20 h-20 object-cover rounded-lg"
            alt="uploaded image"
          />
        )}

        <input className="hidden" type="file" onChange={handleImageChange} />
      </label>
      <button
        className={` mx-8 w-24 h-16 disabled:bg-gray-400 text-white bg-blue-500 active:bg-blue-600 rounded-lg p-2 `}
        onClick={handleImageUpload}>
        Upload Image
      </button>
    </div>
  );
}
