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
  return (
    <>
      <Card bg="white" w="8xl">
        <CardBody>
          <CardHeader>
            <Button onClick={() => clickFn()} />
          </CardHeader>
          <Box w="100%" overflow="hidden" h="sm">
            <Image src={recipe.image} />
          </Box>
          <Flex>
            <Box w="50%">
              <Flex flexDir={"column"}>
                <Text>{recipe.mealType}</Text>
                <Heading size={"lg"}>{recipe.label}</Heading>
                <Text>Total cooking time: {recipe.totalTime} minutes </Text>
                <Text>Servings: {recipe.yield}</Text>
                <Heading size={"md"}>Ingredients:</Heading>
                <Flex flexDir={"column"}>
                  {recipe.ingredientLines.map((ingredient) => (
                    <Text key={ingredient}>{ingredient}</Text>
                  ))}
                </Flex>
              </Flex>
            </Box>
            <Box w="50%">
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
              <Text>Total nutrients:</Text>
              <Flex>
                <ShowTotalNutrients nutrients={recipe.totalNutrients} />
              </Flex>
            </Box>
          </Flex>
          <CardFooter></CardFooter>
        </CardBody>
      </Card>
    </>
  );
};
