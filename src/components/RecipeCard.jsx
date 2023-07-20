import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { ShowTags } from "./ShowTags";
import { ShowHealthLabel } from "./ShowHealthLabel";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Card
      w={"sm"}
      h={"35rem"}
      borderRadius="xl"
      cursor="pointer"
      _hover={{ transform: "scale(1.03)" }}
      overflow="hidden"
      bg="white"
      boxShadow={"2xl"}
      onClick={() => clickFn(recipe)}
    >
      <Image src={recipe.image} h={64} w="100%" />
      <CardBody>
        <CardHeader>
          <Stack>
            <Text align="center">{recipe.mealType}</Text>
            <Heading size="md" align="center">
              {recipe.label}
            </Heading>
            <Flex flexDir={"row"} gap={2} justify={"center"}>
              <ShowHealthLabel
                labelNames={recipe.healthLabels}
                input="vegetarian"
              />
              <ShowHealthLabel labelNames={recipe.healthLabels} input="vegan" />
            </Flex>
            <Flex gap={1} justify={"center"}>
              <ShowTags tags={recipe.dietLabels} bg="green.100" />
            </Flex>
            <Flex justify={"center"} gap={2}>
              <Text align="center">Dish:</Text>
              <Text>{recipe.dishType}</Text>
            </Flex>
            <Text align="center">Cautions:</Text>
            <Flex gap={1} justify={"center"}>
              <ShowTags tags={recipe.cautions} bg="red.100" />
            </Flex>
          </Stack>
        </CardHeader>
      </CardBody>
    </Card>
  );
};
