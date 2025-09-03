"use client";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "@/style/pages/contact.scss";
function Contact() {
  const initValues = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    textArea: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required().min(3).max(150),
    lastName: Yup.string().required().min(3).max(150),
    textArea: Yup.string().required(),
    mobileNumber: Yup.string().required(),
    email: Yup.string().email().required(),
  });
  /* handle submit */

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="contact__page">
      <PageHeader
        title1="Contact cafe"
        title2="Regina"
        descirptions="You will always have a good time at Café Regina in Zelzate ! You can enjoy an extensive drinks menu here , but you are also in the right place if you are hungry . You will also find some tasty weekend suggestions here ! So don't hesitate to contact us by telephone or email or just drop by. 
        You will also find many other things on this website. Here you will find nice atmospheric photos , a guestbook  with customer responses and a newsletter  so that you can stay informed of the latest news and special offers. "
        linkContent="VIEW MENU"
        linkHref="/drinks"
      />
      <div className="contact__form">
        <div className="d-flex justify-content-center align-items-center">
          <div className="form__main">
            <Formik
              initialValues={initValues}
              validationSchema={(values) => validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />

                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />

                <label htmlFor="mobileNumber">Mobile Number</label>
                <Field name="mobileNumber" type="text" />
                <ErrorMessage name="mobileNumber" />

                <label htmlFor="textArea">Mobile Number</label>
                <Field name="textArea" type="tex" as="textarea" />
                <ErrorMessage name="textArea" />

                <button type="submit">Send</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
