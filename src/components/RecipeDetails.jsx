import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";
import { ShowTags } from "./ShowTags";
import { ShowTotalNutrients } from "./ShowTotalNutrients";

export const RecipeDetails = ({ recipe, clickFn }) => {
  const mealTypeToUpperCase = recipe.mealType.map((mealtype) =>
    mealtype.toUpperCase()
  );
  return (
    <>
      <Card bg="white" w="4xl">
        <CardBody pl="0" pr="0">
          <CardHeader>
            <Button onClick={() => clickFn()}>
              <Text fontFamily={"sans-serif"} fontWeight={"bold"}>
                {"<"}
              </Text>
            </Button>
          </CardHeader>
          <Box w="100%" overflow="hidden" h="12rem">
            <Image
              src={recipe.image}
              w="100%"
              alt={recipe.label}
              align={"200% 200%"}
            />
          </Box>
          <Flex
            pt="3rem"
            pl="3rem"
            pr="3rem"
            gap={3}
            flexDir={{ base: "column", md: "row" }}
          >
            <Flex flexDir={"column"} w={{ base: "100%", md: "50%" }}>
              <Text color="gray.500" fontWeight="500" fontSize="sm">
                {mealTypeToUpperCase}
              </Text>
              <Heading size={"md"}>{recipe.label}</Heading>
              <Text mt=".5rem">
                Total cooking time: {recipe.totalTime} minutes
              </Text>
              <Text>Servings: {recipe.yield}</Text>
              <Heading size={"md"} mt=".7rem" fontWeight="500">
                Ingredients:
              </Heading>
              <Flex flexDir={"column"} mt=".4rem">
                {recipe.ingredientLines.map((ingredient) => (
                  <Text key={ingredient} mt=".2rem">
                    {ingredient}
                  </Text>
                ))}
              </Flex>
            </Flex>
            <Flex flexDir="column" gap="1" w={{ base: "100%", md: "50%" }}>
              <Text>Health labels:</Text>
              <Flex gap={2} flexDir={"row"} wrap={"wrap"}>
                <ShowTags tags={recipe.healthLabels} bg={"purple.100"} />
              </Flex>
              <Text>Diet:</Text>
              <Flex gap={2} flexDir={"row"} wrap={"wrap"}>
                <ShowTags tags={recipe.dietLabels} bg={"green.100"} />
              </Flex>
              <Text>Cautions: </Text>
              <Flex gap={2} flexDir={"row"} wrap={"wrap"}>
                <ShowTags tags={recipe.cautions} bg={"red.100"} />
              </Flex>
              <Text fontSize={"1.2rem"} fontWeight={"600"}>
                Total nutrients:
              </Text>
              <Flex>
                <ShowTotalNutrients nutrients={recipe.totalNutrients} />
              </Flex>
            </Flex>
          </Flex>
          <CardFooter></CardFooter>
        </CardBody>
      </Card>
    </>
  );
};
