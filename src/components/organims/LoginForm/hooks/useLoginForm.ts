import * as yup from "yup";
import { useFormik } from "formik";
import { validationInputsLogin } from "../../../../utilitiesForm/ValidationInputs";
import { useCallback } from "react";

const inputsBuilderProps = (formik, inputs) => {
  const { touched, handleBlur, handleChange, errors, values } = formik;
  return inputs.map((input) => {
    const hasError = touched[`${input.input}`] && errors[`${input.input}`];
    return {
      error: !!hasError,
      type: input.type,
      placeholder: input.placeholder,
      label: input.placeholder,
      value: values[input.input],
      helperText: errors[`${input.input}`],
      onBlur: handleBlur(input.input),
      onChange: !input.disableOnChage ? handleChange(input.input) : () => null,
      name: input?.input
    };
  });
};

export default function () {
  const validationSchema = yup.object().shape(validationInputsLogin());
  const inputs = [
    {
      input: "email",
      title: "Email *",
      placeholder: "Email",
      type: "email"
    },
    {
      input: "password",
      title: "Password *",
      placeholder: "Password",
      type: "password"
    }
  ];

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: async (credentials) => {
      console.log("credentials>>", credentials);
    }
  });
  const onSend = useCallback(() => {
    formik.handleSubmit();
  }, []);

  return {
    inputs: inputsBuilderProps(formik, inputs),
    onSend
  };
}
