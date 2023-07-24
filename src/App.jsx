import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { ChakraProvider } from "@chakra-ui/react";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <ChakraProvider>
      {selectedRecipe ? (
        <>
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        </>
      ) : (
        <>
          <RecipeListPage clickFn={setSelectedRecipe} />
        </>
      )}
    </ChakraProvider>
  );
};
