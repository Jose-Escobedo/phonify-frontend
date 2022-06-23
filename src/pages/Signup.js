import React from "react";
import { useState } from "react";
import { Navigate } from "react-router";

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
} from "../components/Signup/SignupElements";

const Signup = ({ setUser, setIsAuthenticated, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      name: username,
      password,
    };

    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  }
  return (
    <>
      {user ? (
        <Navigate to="/"></Navigate>
      ) : (
        <Container>
          <FormWrap>
            <Icon to="/">Phonify</Icon>
            <FormContent>
              <Form onSubmit={onSubmit}>
                <FormH1>Register for an account</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput
                  type="email"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormButton type="submit">Sign Up</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      )}
    </>
  );
};

export default Signup;
