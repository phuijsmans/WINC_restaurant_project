import { Center, Heading, Image } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[5].recipe.cautions);

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <Image src={data.hits[0].recipe.image} w="300px" />
    </Center>
  );
};
