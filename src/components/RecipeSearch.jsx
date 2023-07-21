import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { RecipeList } from "./RecipeList";
import { data } from "../utils/data";
import { Center } from "@chakra-ui/react";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  const matchedRecipes = data.hits.filter((object) => {
    return object.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const matchedHealthLabel = data.hits.filter((object) => {
    return object.recipe.healthLabels.map((healthLabel) => {
      healthLabel.toLowerCase().includes(searchField.toLowerCase());
    });
  });
  return (
    <>
      <Center>
        <TextInput
          id="searchRecipe"
          changeFn={handleChange}
          w={{ base: "18em", md: "xl" }}
          mb={8}
          placeholder="search for recipes"
          bg="white"
        />
      </Center>
      <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
    </>
  );
};
