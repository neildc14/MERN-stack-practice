import React from "react";
import { Box, Heading, Link, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Nav() {
  return (
    <Box as="header" p={8} bgColor="#FFFF">
      <Container maxW="container.xl">
        <Link as={RouterLink} to="/">
          <Heading as="h1" fontSize="lg">
            Workout Buddy
          </Heading>
        </Link>
      </Container>
    </Box>
  );
}

export default Nav;
