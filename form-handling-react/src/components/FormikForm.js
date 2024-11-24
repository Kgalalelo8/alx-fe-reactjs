
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted successfully", values);
    // Replace this with your API call logic
    alert("Registration successful!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>
              Username:
              <Field type="text" name="username" />
            </label>
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>
          <div>
            <label>
              Email:
              <Field type="email" name="email" />
            </label>
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>
          <div>
            <label>
              Password:
              <Field type="password" name="password" />
            </label>
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
