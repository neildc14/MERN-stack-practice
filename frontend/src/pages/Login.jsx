import React, { useCallback,} from "react";
import { Container, Flex } from "@chakra-ui/react";
import useChangeInput from "../hooks/useChangeInput";
import UserForm from "../components/UserForm";
import { useLogInMutation } from "../services/api/users";

function Login() {
  const [email, bindEmail] = useChangeInput("");
  const [password, bindPassword] = useChangeInput("");
  const [loginAccount] = useLogInMutation();
  const login = true;

  const loginUserAccount = useCallback(
    (e) => {
      e.preventDefault();
      loginAccount({ email, password });
    },
    [email, password]
  );

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
        />
      </Flex>
    </Container>
  );
}

export default Login;
