import * as yup from "yup";

export const validationInputsLogin = () => {
  return {
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: yup
      .string()
      .required("The password is required")
      .min(6, "*Password must have at least 6 characters")
      .max(100, "*Password can't be longer than 100 characters")
  };
};
