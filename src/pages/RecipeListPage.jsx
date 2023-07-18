import { Heading, Center, Flex, Stack } from "@chakra-ui/react";
import { data } from "../utils/data.js";
import { RecipeCard } from "../components/RecipeCard.jsx";
import { RecipeList } from "../components/RecipeList.jsx";
import { RecipeSearch } from "../components/RecipeSearch.jsx";

export const RecipeListPage = ({ clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  return (
    <Stack bg="blue.300" pb={10}>
      <Center mt={10} mb={10}>
        <Heading color={"white"} mt={10}>
          WINC Recipes
        </Heading>
      </Center>
      <RecipeSearch clickFn={clickFn} />
    </Stack>
  );
};
