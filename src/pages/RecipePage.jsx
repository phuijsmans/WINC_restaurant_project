import { Center, Text } from "@chakra-ui/react";
import { RecipeDetails } from "../components/RecipeDetails";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Center h="100vh" bg="blue.300">
        <RecipeDetails recipe={recipe} />
      </Center>
    </>
  );
};
