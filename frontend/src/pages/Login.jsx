import React, { useCallback } from "react";
import { Container, Flex } from "@chakra-ui/react";
import useChangeInput from "../hooks/useChangeInput";
import UserForm from "../components/UserForm";
import { useLogInMutation } from "../services/api/users";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../services/features/userSlice";

function Login() {
  const [email, bindEmail] = useChangeInput("");
  const [password, bindPassword] = useChangeInput("");
  const [loginAccount, { error }] = useLogInMutation();
  const dispatch = useDispatch();
  const login = true;

  const loginUserAccount = useCallback(
    (e) => {
      e.preventDefault();
      loginAccount({ email, password })
        .then((data) => {
          if (data?.error) {
            return;
          }
          localStorage.setItem("user", JSON.stringify(data));
          dispatch(loginUser(data));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [email, password]
  );

  const validationErrors = error?.data.errors;
  const authenticaionErrors = error?.data;

  return (
    <Container maxW="container.xl" mt={10}>
      <Flex justifyContent="center">
        <UserForm
          login={login}
          formHeader="Log in account."
          buttonType="Log in"
          bindEmail={bindEmail}
          bindPassword={bindPassword}
          onSubmitFunction={loginUserAccount}
          validationErrors={validationErrors}
          authenticaionErrors={authenticaionErrors}
        />
      </Flex>
    </Container>
  );
}

export default Login;
