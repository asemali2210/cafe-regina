"use client";
import "@/style/pages/contact.scss";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  // Initial values for the contact form fields
  const initValues = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    textArea: "",
  };

  // Yup validation
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .trim()
      .min(2, "Use at least 2 letters")
      .max(150, "Too long (max 150)")
      .required("Please enter your first name"),
    lastName: Yup.string()
      .trim()
      .min(2, "Use at least 2 letters")
      .max(150, "Too long (max 150)")
      .required("Please enter your last name"),
    email: Yup.string()
      .trim()
      .email("Enter a valid email (e.g. name@example.com)")
      .required("Please enter your email"),
    mobileNumber: Yup.string()
      .trim()
      // Not too strict to avoid blocking valid formats
      .matches(/^[0-9+()\s-]{7,20}$/i, "Enter a valid phone number")
      .required("Please enter your phone number"),
    textArea: Yup.string().trim().required("Please enter your message"),
  });

  // Handle submit: replace with API call when ready

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="contact-page">
      <PageHeader
        title1="Contact cafe"
        title2="Regina"
        descirptions="You will always have a good time at Café Regina in Zelzate ! You can enjoy an extensive drinks menu here , but you are also in the right place if you are hungry . You will also find some tasty weekend suggestions here ! So don't hesitate to contact us by telephone or email or just drop by. 
        You will also find many other things on this website. Here you will find nice atmospheric photos , a guestbook  with customer responses and a newsletter  so that you can stay informed of the latest news and special offers. "
        linkContent="VIEW MENU"
        linkHref="/drinks"
      />
      <div className="contact-form py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-8">
              <div className="contact-form__wrapper py-5 d-flex flex-column justify-content-center align-items-center">
                <div className="contact-form__header d-flex flex-column justify-content-center align-items-center">
                  <p className="contact-form__title font-harmond">Contact Us</p>
                  <p className="contact-form__subtitle">
                    Will do feedback As fast as we can!
                  </p>
                </div>
                <div className="contact-form__body w-75">
                  <Formik
                    initialValues={initValues}
                    validationSchema={validationSchema}
                    validateOnBlur
                    validateOnChange
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form
                        className="contact-form__form d-flex flex-column"
                        noValidate
                      >
                        {/* Name row: first and last names as siblings */}
                        <div className="contact-form__row">
                          <div className="contact-form__group">
                            <label htmlFor="firstName">First Name</label>
                            <Field
                              id="firstName"
                              name="firstName"
                              type="text"
                              autoComplete="given-name"
                              placeholder="e.g. John"
                              maxLength={150}
                              aria-required="true"
                            />
                            <ErrorMessage name="firstName">
                              {(msg) => (
                                <div
                                  id="firstName-error"
                                  className="contact-form__error"
                                >
                                  {msg}
                                </div>
                              )}
                            </ErrorMessage>
                          </div>
                          <div className="contact-form__group">
                            {/* Last Name */}
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                              id="lastName"
                              name="lastName"
                              type="text"
                              autoComplete="family-name"
                              placeholder="e.g. Doe"
                              maxLength={150}
                              aria-required="true"
                            />
                            <ErrorMessage name="lastName">
                              {(msg) => (
                                <div
                                  id="lastName-error"
                                  className="contact-form__error"
                                >
                                  {msg}
                                </div>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                        {/* Email */}
                        <div className="contact-form__group">
                          <label htmlFor="email">Email Address</label>
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="e.g. name@example.com"
                            aria-required="true"
                          />
                          <ErrorMessage name="email">
                            {(msg) => (
                              <div
                                id="email-error"
                                className="contact-form__error"
                              >
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>

                        {/* Phone */}
                        <div className="contact-form__group">
                          <label htmlFor="mobileNumber">Mobile Number</label>
                          <Field
                            id="mobileNumber"
                            name="mobileNumber"
                            type="tel"
                            inputMode="tel"
                            placeholder="e.g. +32 470 12 34 56"
                            aria-required="true"
                          />
                          <ErrorMessage name="mobileNumber">
                            {(msg) => (
                              <div
                                id="mobileNumber-error"
                                className="contact-form__error"
                              >
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>

                        {/* Message */}
                        <div className="contact-form__group">
                          <label htmlFor="textArea">Message</label>
                          <Field
                            id="textArea"
                            name="textArea"
                            as="textarea"
                            rows={5}
                            placeholder="How can we help?"
                            aria-required="true"
                          />
                          <ErrorMessage name="textArea">
                            {(msg) => (
                              <div
                                id="textArea-error"
                                className="contact-form__error"
                              >
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>

                        <button
                          type="submit"
                          className="contact-form__submit"
                          disabled={isSubmitting}
                        >
                          SEND
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
