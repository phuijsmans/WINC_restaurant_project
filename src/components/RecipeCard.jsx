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
  Tag,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  const healthLabels = recipe.healthLabels.map((healthLabel) => (
    <Tag key={healthLabel}>{healthLabel}</Tag>
  ));
  return (
    <Card
      w={"sm"}
      h={"40rem"}
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
            <Flex gap={1} justify={"center"}>
              {recipe.dietLabels.map((diet) => (
                <Tag key={diet} bg="green.100">
                  {diet}
                </Tag>
              ))}
            </Flex>
            <Text align="center">Dish:</Text>
            <Flex justify={"center"}>
              <Tag>{recipe.dishType}</Tag>
            </Flex>
            <Text align="center">Cautions:</Text>
            <Flex gap={1} justify={"center"}>
              {recipe.cautions.map((caution) => (
                <Tag key={caution} bg="red.100">
                  {caution}
                </Tag>
              ))}
            </Flex>
            <Flex>{healthLabels}</Flex>
          </Stack>
        </CardHeader>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
