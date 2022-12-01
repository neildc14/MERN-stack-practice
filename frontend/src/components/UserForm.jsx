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
  error
}) {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);

  let emailError;
  let passwordError;

  console.log(error)
  error?.map((err) => err)
    .filter((err) => {
      if (err.param === 'email') return emailError = err.msg
      if (err.param === 'password') return passwordError = err.msg
    })

  console.log(emailError, passwordError)
  return (
    <Card bgColor="white" w="23rem">
      <CardHeader>
        <Text fontSize="xl">{formHeader}</Text>
      </CardHeader>
      <CardBody>
        <Box as="form" onSubmit={onSubmitFunction}>
          <FormControl mb={6} isInvalid={error}>
            <FormLabel>Email</FormLabel>
            <Input type="email" autoComplete="off" {...bindEmail} />
            <FormErrorMessage>{emailError}</FormErrorMessage>
          </FormControl>

          <FormControl mb={6} isInvalid={error}>
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
            <FormErrorMessage>{passwordError}</FormErrorMessage>
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
