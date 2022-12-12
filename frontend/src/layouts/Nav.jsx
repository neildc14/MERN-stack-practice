import React, { useCallback, useEffect } from "react";
import {
  Box,
  Heading,
  Link,
  Container,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((state) => state.user.user);
  const [localStore, dispatch] = useLogout();
  const logout = useCallback(() => {
    localStore(), dispatch();
  }, [user]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);
  console.log(user);

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
          <Box>
            {user !== null ? (
              <HStack spacing={4}>
                <Text>{user.data.email}</Text>
                <Link
                  as={RouterLink}
                  to="/login"
                  onClick={logout}
                  px={4}
                  py={2}
                  sx={{ border: "1px solid primary.100" }}
                >
                  Logout
                </Link>
              </HStack>
            ) : (
              <HStack spacing={4}>
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
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default React.memo(Nav);
