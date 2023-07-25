import { useEffect, useState } from "react";
import { TextInput } from "./ui/TextInput";
import { RecipeList } from "./RecipeList";
import { data } from "../utils/data";
import { Center, Flex } from "@chakra-ui/react";
import { DropDownInput } from "./ui/DropDownInput";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  const searchFieldToLowerCase = searchField.toLowerCase();

  const [searchType, setSearchType] = useState("");
  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const [searchDefault, setSearchDefault] = useState(false);
  const [searchTitleVisible, setSearchTitleVisible] = useState(false);
  const [searchHealthLabelVisible, setSearchHealthLabelVisible] =
    useState(false);
  const [searchMealType, setSearchMealType] = useState(false);

  useEffect(() => {
    searchType === "" ? setSearchDefault(true) : setSearchDefault(false);
    searchType === "recipeName"
      ? setSearchTitleVisible(true)
      : setSearchTitleVisible(false);
    searchType === "healthLabel"
      ? setSearchHealthLabelVisible(true)
      : setSearchHealthLabelVisible(false);
    searchType === "mealType"
      ? setSearchMealType(true)
      : setSearchMealType(false);
  });

  const matchedRecipes = data.hits.filter((object) => {
    return object.recipe.label.toLowerCase().includes(searchFieldToLowerCase);
  });

  const matchedHealthLabel = data.hits.filter((object) => {
    const healthLabels = JSON.stringify(object.recipe.healthLabels)
      .toLowerCase()
      .replaceAll("-", " ");
    return healthLabels.includes(searchFieldToLowerCase);
  });

  const matchedMealType = data.hits.filter((object) => {
    const mealType = JSON.stringify(object.recipe.mealType).toLowerCase();
    return mealType.includes(searchFieldToLowerCase);
  });

  return (
    <>
      <Center>
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Center>
            <DropDownInput
              changeFn={handleSearchTypeChange}
              size="sm"
              w={{ base: "10em", md: "10em" }}
              mb={8}
              bg="white"
              borderRadius=".4em"
              mr="0.8em"
              value={searchType}
            />
          </Center>
          <TextInput
            id="searchRecipe"
            changeFn={handleChange}
            w={{ base: "18em", sm: "md", md: "xl" }}
            mb={8}
            placeholder="search for recipes"
            bg="white"
          />
        </Flex>
      </Center>

      {searchDefault && (
        <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
      )}
      {searchTitleVisible && (
        <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
      )}
      {searchHealthLabelVisible && (
        <RecipeList recipes={matchedHealthLabel} clickFn={clickFn} />
      )}
      {searchMealType && (
        <RecipeList recipes={matchedMealType} clickFn={clickFn} />
      )}
    </>
  );
};
