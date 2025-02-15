import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./contactus.css";
const ContactUs = () => {
  const initialValues = {
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  };

  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    Phone: Yup.string().required("Phone is required"),
    Message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post("https://clean-green-agriculture.vercel.app/contactus", values, {
        headers: {
          token:
            "CleanAndGreen_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2JlNzM0NWY3YzQwMzdjNTc0YTdmMiIsImVtYWlsIjoiYWxkb255YTMzOUBnbWFpbC5jb20iLCJpYXQiOjE3MTg1NzExODMsImV4cCI6MTcxODY1NzU4M30.7uCiG_JZIWqeAtSzl4rFJOc3y8j1HDDZ8T0ZDphZYEk",
        },
      })
      .then((response) => {
        console.log("Success:", response);

        toast.success("Message sent successfully", {
          position: "top-center",
          theme: "colored",
        });
        resetForm();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to send message", {
          position: "top-center",
          theme: "colored",
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center">
        <h2 className="text-center contactHead">Contact Us</h2>
      </div>
      <h1 className="text-center contactH1">Get Office Info</h1>
      <p className="text-center contactP">
        You can be in a attach with us through these different 3 different
        contact 24h/7w
      </p>

      <div className="row mb-4 text-center ">
        <div className="col-md-4 my-2">
          <div className="p-3 border rounded shadow-sm">
            <h5>Address</h5>
            <i
              className="fas fa-location-dot fs-1 contactIcon"
              style={{ fontSize: "2rem" }}
            ></i>

            <p>Qena, Egypt</p>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="p-3 border rounded shadow-sm">
            <h5>Phone</h5>
            <i
              className="fas fa-phone-volume fs-1 contactIcon"
              style={{ fontSize: "2rem" }}
            ></i>

            <p>+20 01125413215</p>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="p-3 border rounded shadow-sm">
            <h5>E-mail</h5>
            <i
              className="fas fa-envelope fs-1 contactIcon"
              style={{ fontSize: "2rem" }}
            ></i>

            <p>cleanandgreen@gmail.com</p>
          </div>
        </div>
      </div>
      <h3 className="text-center contactH3">Stay in touch! Contact us</h3>
      <p className="text-center contactPara">
        Have a question? Give us a call or fill out the contact form. We’d love
        to hear from you.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label InputName">
                    Name
                  </label>
                  <Field type="text" name="Name" className="form-control " />
                  <ErrorMessage
                    name="Name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label InputName">
                    E-mail
                  </label>
                  <Field type="email" name="Email" className="form-control " />
                  <ErrorMessage
                    name="Email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Phone" className="form-label InputName">
                    Phone
                  </label>
                  <Field type="text" name="Phone" className="form-control" />
                  <ErrorMessage
                    name="Phone"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Message" className="form-label InputName">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="Message"
                    rows="3"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="Message"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success contactBtn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
