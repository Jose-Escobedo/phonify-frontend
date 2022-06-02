import React from "react";
import { Navigate } from "react-router";
import { useState } from "react";
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
  Text,
} from "./LoginElements";

const Login = ({ setUser, setIsAuthenticated, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      name: username,
      password,
    };

    fetch(`http://localhost:3000/login`, {
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
        res.json().then((json) => setError(json.error));
      }
    });
  }
  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <Container>
          <FormWrap>
            <Icon to="/">Phonify</Icon>
            <FormContent>
              <Form onSubmit={onSubmit}>
                <FormH1>Sign in to your account</FormH1>
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
                <FormButton type="submit">Continue</FormButton>
                <Text>Forgot Password?</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      )}
    </>
  );
};

export default Login;
