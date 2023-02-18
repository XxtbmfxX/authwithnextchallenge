"use client";
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import styles from "./edit.module.css";

import axios from "axios";
import ImageUpload from "./ImageUpload";

export default function EditForm({ userState }) {
  const formik = useFormik({
    initialValues: {
      name: userState.name,
      bio: userState.bio,
      image: userState.image,
      phone: userState.phone,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      bio: Yup.string()
        .max(250, "Must be 250 characters or less")
        .required("Required"),
      image: Yup.string().required(),
      phone: Yup.string().required(),
    }),
    onSubmit: (values) => {
      JSON.stringify(values);
      axios.post("http://localhost:3000/api/user", {
        ...values,
        id: userState.id,
      });
    },
  });

  return (
    <>
      <ImageUpload Uimage={userState.image} id={userState.id} />
      <form className={styles.Form} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...formik.getFieldProps("name")} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="text"
          value={userState.bio}
          {...formik.getFieldProps("bio")}
        />
        {formik.touched.bio && formik.errors.bio ? (
          <div>{formik.errors.bio}</div>
        ) : null}

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" {...formik.getFieldProps("phone")} />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
