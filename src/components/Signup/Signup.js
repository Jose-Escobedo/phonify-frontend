import React from "react";
import {
  Form,
  FormContent,
  FormLabel,
  FormWrap,
  FormButton,
  FormInput,
  FormH1,
  Container,
  Icon,
} from "./SignupElements";

const Signup = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Phonify</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Register for an account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Sign Up</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signup;
