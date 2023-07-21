import { Center } from "@chakra-ui/react";
import { RecipeDetails } from "../components/RecipeDetails";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Center h="100%" bg="blue.300" minH="100vh">
        <RecipeDetails recipe={recipe} clickFn={clickFn} />
      </Center>
    </>
  );
};
