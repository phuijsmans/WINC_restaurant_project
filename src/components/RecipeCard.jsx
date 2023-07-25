import {
  Card,
  CardBody,
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
      w={{ base: `100%`, sm: `sm` }}
      h={{ base: `25em`, sm: "35em" }}
      borderRadius="xl"
      cursor="pointer"
      _hover={{ transform: "scale(1.03)" }}
      overflow="hidden"
      bg="white"
      boxShadow={"2xl"}
      onClick={() => clickFn(recipe)}
    >
      <CardHeader overflow="hidden" h={{ base: "25%", sm: 64 }} p="0">
        <Image
          src={recipe.image}
          h={64}
          w={"100%"}
          align={{ base: "0rem -4rem", sm: "0rem 0rem" }}
        />
      </CardHeader>
      <CardBody>
        <Stack>
          <Text color="gray.500" fontWeight="500" align="center">
            {recipe.mealType.toString().toUpperCase()}
          </Text>
          <Heading size="md" align="center">
            {recipe.label}
          </Heading>
          {/* <Flex flexDir={"row"} gap={2} justify={"center"}>
            <ShowHealthLabel
              labelNames={recipe.healthLabels}
              showLabel="vegetarian"
            />
            <ShowHealthLabel
              labelNames={recipe.healthLabels}
              showLabel="vegan"
            />
          </Flex> */}
          <ShowHealthLabel
            labelNames={recipe.healthLabels}
            showLabel={["vegetarian", "vegan"]}
          />
          <ShowTags
            gap={1}
            justify="center"
            tags={recipe.dietLabels}
            bg="green.100"
          />
          <Flex justify={"center"} gap={2}>
            <Text align="center">Dish:</Text>
            <Text>{recipe.dishType}</Text>
          </Flex>
          <Text align="center">Cautions:</Text>
          <ShowTags
            gap={1}
            justify="center"
            tags={recipe.cautions}
            bg="red.100"
          />
        </Stack>
      </CardBody>
    </Card>
  );
};
