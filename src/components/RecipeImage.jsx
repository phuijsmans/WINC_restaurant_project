import { Box, Image } from "@chakra-ui/react";

export const RecipeImage = ({ image, alignImage, ...props }) => {
  return (
    <>
      <Box overflow="hidden" {...props}>
        <Image src={image} w="100rem" h="50rem" align={alignImage}></Image>
      </Box>
    </>
  );
};
