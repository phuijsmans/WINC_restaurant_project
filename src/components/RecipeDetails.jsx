import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";
import { ShowTags } from "./ShowTags";
import { ShowTotalNutrients } from "./ShowTotalNutrients";
import { RecipeImage } from "./RecipeImage";

export const RecipeDetails = ({ recipe, clickFn }) => {
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
          <RecipeImage
            image={recipe.image}
            alignImage={{ base: "0rem -25rem", md: "0rem -20rem" }}
            w="100%"
            h={{ base: "8rem", md: "12rem" }}
          />
          <Flex
            pt="3rem"
            pl="3rem"
            pr="3rem"
            gap={3}
            flexDir={{ base: "column", md: "row" }}
          >
            <Flex flexDir={"column"} w={{ base: "100%", md: "50%" }}>
              <Text color="gray.500" fontWeight="500" fontSize="sm">
                {recipe.mealType.toString().toUpperCase()}
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
                {recipe.ingredientLines.map((ingredient, id) => (
                  <Text key={id} mt=".2rem">
                    {ingredient.toString().replace("*", "")}
                  </Text>
                ))}
              </Flex>
            </Flex>
            <Flex flexDir="column" gap="1" w={{ base: "100%", md: "50%" }}>
              <Text>Health labels:</Text>
              <ShowTags
                gap={2}
                flexDir={"row"}
                tags={recipe.healthLabels}
                bg={"purple.100"}
              />
              <Text>Diet:</Text>
              <ShowTags
                gap={2}
                flexDir={"row"}
                tags={recipe.dietLabels}
                bg={"green.100"}
              />
              <Text>Cautions: </Text>
              <ShowTags
                gap={2}
                flexDir={"row"}
                tags={recipe.cautions}
                bg={"red.100"}
              />
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
