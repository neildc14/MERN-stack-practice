import React, { useCallback, useState } from "react";
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import useChangeInput from "../hooks/useChangeInput";
import UserForm from "../components/UserForm";
import { useSignUpMutation } from "../services/api/users";

function Signup() {
  const [email, bindEmail] = useChangeInput("");
  const [password, bindPassword] = useChangeInput("");
  const login = false;

  const [signup] = useSignUpMutation();
  const signUpAccount = useCallback(
    (e) => {
      e.preventDefault();
      signup({ email, password });
    },
    [email, password]
  );
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
        >
          <FormControl>
            <FormLabel>Confirm password</FormLabel>
            <Input type="password" autoComplete="current-password" />
          </FormControl>
        </UserForm>
      </Flex>
    </Container>
  );
}

export default Signup;
