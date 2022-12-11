import React from "react";
import { Box, Heading, Link, Container, Flex, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";

function Nav() {
  const [localStore, dispatch] = useLogout();
  const logout = () => {
    localStore(), dispatch();
  };
  return (
    <Box as="header" p={8} bgColor="#FFFF">
      <Container maxW="container.xl">
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link as={RouterLink} to="/">
            <Heading as="h1" fontSize="lg">
              Workout Buddy
            </Heading>
          </Link>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/logout" onClick={logout}>
              Logout
            </Link>
            <Link as={RouterLink} to="/signup">
              Sign Up
            </Link>
            <Link
              as={RouterLink}
              to="/login"
              bgColor="primary.100"
              px={4}
              py={2}
              color="white"
              borderRadius="md"
              _hover={{ textDecoration: "none", bgColor: "green.600" }}
            >
              Log In
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Nav;
