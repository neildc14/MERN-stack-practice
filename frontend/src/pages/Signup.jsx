import React, { useCallback } from "react";
import { Container, Flex } from "@chakra-ui/react";
import useChangeInput from "../hooks/useChangeInput";
import UserForm from "../components/UserForm";
import { useSignUpMutation } from "../services/api/users";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../services/features/userSlice";

function Signup() {
  const [email, bindEmail] = useChangeInput("");
  const [password, bindPassword] = useChangeInput("");
  const login = false;
  const [signup, { error }] = useSignUpMutation();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const signUpAccount = useCallback(
    (e) => {
      e.preventDefault();
      signup({ email, password })
        .then((data) => {
          localStorage.setItem("user", JSON.stringify(data));
          dispatch(loginUser(data));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [email, password]
  );
  console.log("USER", user);

  const validationErrors = error?.data.errors;
  const authenticaionErrors = error?.data;
  console.log(error?.data);

  return (
    <Container maxW="container.xl" mt={10}>
      <Flex justifyContent="center">
        <UserForm
          login={login}
          formHeader="Sign up account."
          buttonType="Sign up"
          bindEmail={bindEmail}
          bindPassword={bindPassword}
          onSubmitFunction={signUpAccount}
          validationErrors={validationErrors}
          authenticaionErrors={authenticaionErrors}
        ></UserForm>
      </Flex>
    </Container>
  );
}

export default Signup;
