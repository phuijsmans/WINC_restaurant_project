import { Flex } from "@chakra-ui/react";
import { data } from "../utils/data.js";
import { RecipeCard } from "../components/RecipeCard.jsx";

export const RecipeList = ({ recipes, clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  return (
    <Flex
      gap={10}
      flexWrap="wrap"
      flexDir={["column", "row"]}
      justify="center"
      alignItems="center"
    >
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.recipe.label}
          recipe={recipe.recipe}
          clickFn={clickFn}
        />
      ))}
    </Flex>
  );
};
