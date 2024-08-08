import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { ErrorMessage, Formik, Field, Form as FormikForm } from "formik";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Login is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      }}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form submitted");
        console.log("Submitted values:", values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, dirty, values }) => {
        return (
          <FormikForm>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Login
              </label>
              <Field
                type="text"
                id="username"
                placeholder="Enter login"
                name="username"
                className="form-control"
                autoComplete="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="password"
                id="password"
                placeholder="Enter password"
                name="password"
                className="form-control"
                autoComplete="new-password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                placeholder="Enter confirm password"
                name="confirmPassword"
                className="form-control"
                autoComplete="new-password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                id="email"
                placeholder="Enter email"
                name="email"
                className="form-control"
                autoComplete="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
            >
              Submit
            </Button>

            <PasswordStrengthIndicator password={values.password} />
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
