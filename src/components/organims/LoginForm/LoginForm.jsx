import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton
} from "../Common";
import { Marginer } from "../marginer";
import { AccountContext } from "../AccountContext";
import useLoginForm from "./hooks/useLoginForm";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { inputs, onSend } = useLoginForm();

  return (
    <BoxContainer>
      <FormContainer>
        {inputs.map((input, key) => {
          return (
            <Input
              key={key}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              onChange={input.onChange}
              onBlur={input.onBlur}
              className={input.error ? "error" : ""}
            />
          );
        })}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={onSend}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
