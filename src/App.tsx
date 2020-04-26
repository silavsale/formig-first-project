import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Must be at least 8 characters"),
});

const handleSubmit = (values: any) => {
  console.log(`email: ${values.email}, password: ${values.password}`);
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, handleReset, isValid }) => (
          <Form>
            <div>
              <label htmlFor="email">Email:</label>
              <Field autocomplete="off" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field autocomplete="off" name="password" />
              <ErrorMessage name="password" />
            </div>
            <button disabled={!isValid || !dirty} type="submit">
              SUBMIT
            </button>
            <button onClick={handleReset} type="button">
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
