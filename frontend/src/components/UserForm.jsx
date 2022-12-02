import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function UserForm({
  login,
  formHeader,
  buttonType,
  children,
  bindEmail,
  bindPassword,
  onSubmitFunction,
  validationErrors,
  authenticaionErrors
}) {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);

  let emailError;
  let passwordError;

  validationErrors?.map((err) => err)
    .filter((err) => {
      if (err.param === 'email') return emailError = err.msg
      if (err.param === 'password') return passwordError = err.msg
    })

  let incorrectEmail;
  let incorrectPassword;
  const authError = authenticaionErrors?.error

  if (authError?.localeCompare('This email already in use') === 0) {
    incorrectEmail = authError
  }
  if (authError?.localeCompare("Incorrect Email") === 0) {
    incorrectEmail = authError
  }
  if (authError?.localeCompare("Incorrect Password") === 0) {
    incorrectPassword = authError
  }

  return (
    <Card bgColor="white" w="23rem">
      <CardHeader>
        <Text fontSize="xl">{formHeader}</Text>
      </CardHeader>
      <CardBody>
        <Box as="form" onSubmit={onSubmitFunction}>
          <FormControl mb={6} isInvalid={emailError || incorrectEmail}>
            <FormLabel>Email</FormLabel>
            <Input type="email" autoComplete="off" {...bindEmail} />
            <FormErrorMessage>{emailError || incorrectEmail}</FormErrorMessage>
          </FormControl>

          <FormControl mb={6} isInvalid={passwordError || incorrectPassword}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                {...bindPassword}
                autoComplete="current-password"
              />

              {login && (
                <InputRightElement width="4.5rem">
                  <IconButton
                    size="lg"
                    variant="ghost"
                    _hover={{ padding: 0 }}
                    _active={{ padding: 0 }}
                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={showPassword}
                  />
                </InputRightElement>
              )}
            </InputGroup>
            <FormErrorMessage>{passwordError || incorrectPassword}</FormErrorMessage>
          </FormControl>
          <FormControl>{children}</FormControl>
          <FormControl mt={6}>
            <Button type="submit" w="100%" colorScheme="blue">
              {buttonType}
            </Button>
          </FormControl>
        </Box>
      </CardBody>
    </Card>
  );
}

export default UserForm;
