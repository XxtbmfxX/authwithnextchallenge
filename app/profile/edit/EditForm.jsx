"use client";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";
import styles from "./edit.module.css";

export default function EditForm() {
  const [user, setuser] = useState({
    photo: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    name: "user",
    bio: "lorem impsum me vel mag meaning in facilisis",
    phone: "8585858585",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      bio: "",
      photo: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      bio: Yup.string()
        .max(250, "Must be 250 characters or less")
        .required("Required"),
      photo: Yup.string().required(),
      phone: Yup.string().required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={styles.Form} onSubmit={formik.handleSubmit}>
      <label
        className="flex   items-center cursor-pointer w-auto "
        htmlFor="photo">
        <img
          src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
          className="h-16 w-16 rounded-lg"
          alt="user"
        />
        <input
          className="hidden"
          id="photo"
          type="file"
          {...formik.getFieldProps("photo")}
        />
        <span className="text-sm ml-5">CHANGE PHOTO</span>
        {formik.touched.photo && formik.errors.photo ? (
          <div>{formik.errors.photo}</div>
        ) : null}
      </label>

      <label htmlFor="name">Name</label>
      <input id="name" type="text" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="bio">Bio</label>
      <input id="bio" type="text" {...formik.getFieldProps("bio")} />
      {formik.touched.bio && formik.errors.bio ? (
        <div>{formik.errors.bio}</div>
      ) : null}

      <label htmlFor="phone">Phone</label>
      <input id="phone" type="phone" {...formik.getFieldProps("phone")} />
      {formik.touched.phone && formik.errors.phone ? (
        <div>{formik.errors.phone}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}
