import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Text,
  FormControl,
  FormLabel,
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
}) {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);

  return (
    <Card bgColor="white" w="23rem">
      <CardHeader>
        <Text fontSize="xl">{formHeader}</Text>
      </CardHeader>
      <CardBody>
        <Box as="form" onSubmit={onSubmitFunction}>
          <FormControl mb={6}>
            <FormLabel>Email</FormLabel>
            <Input type="email" autoComplete="off" {...bindEmail} />
          </FormControl>
          <FormControl mb={6}>
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
