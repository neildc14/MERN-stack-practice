import React from "react";
import { SkeletonText, Box } from "@chakra-ui/react";

function DataLoading() {
  return (
    <>
      <Box padding={4} height="215px" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={6} spacing="4" />
      </Box>
      <Box padding={4} height="215px" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={6} spacing="4" />
      </Box>
      <Box padding={4} height="215px" boxShadow="lg" bg="white">
        <SkeletonText mt="4" noOfLines={6} spacing="4" />
      </Box>
    </>
  );
}

export default DataLoading;
