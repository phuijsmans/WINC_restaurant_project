import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";

export const RecipeDetails = ({ recipe }) => {
  return (
    <>
      <Card bg="white" w="8xl">
        <CardBody>
          <CardHeader></CardHeader>
          <Box w="100%" overflow="hidden" h="sm">
            <Image src={recipe.image} />
          </Box>
          <Flex>
            <Box w="50%" bg="red.100"></Box>
            <Box w="50%" bg="green.100"></Box>
          </Flex>
          <CardFooter>Footer</CardFooter>
        </CardBody>
      </Card>
    </>
  );
};
