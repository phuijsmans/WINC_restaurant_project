import { Box, Flex, Text } from "@chakra-ui/react";

export const ShowTotalNutrients = ({ nutrients }) => {
  const fontThickness = "600";
  return (
    <>
      <Flex wrap={"wrap"} gap={4}>
        <Box>
          <Text>
            {nutrients.ENERC_KCAL.quantity.toFixed()}{" "}
            {nutrients.ENERC_KCAL.unit}
          </Text>
          <Text fontWeight={fontThickness}>CALORIES</Text>
        </Box>
        <Box>
          <Text>
            {nutrients.CHOCDF.quantity.toFixed()} {nutrients.CHOCDF.unit}
          </Text>
          <Text fontWeight={fontThickness}>CARBS</Text>
        </Box>
        <Box>
          <Text>
            {nutrients.PROCNT.quantity.toFixed()} {nutrients.PROCNT.unit}
          </Text>
          <Text fontWeight={fontThickness}>PROTEIN</Text>
        </Box>
        <Box>
          <Text>
            {nutrients.FAT.quantity.toFixed()} {nutrients.FAT.unit}
          </Text>
          <Text fontWeight={fontThickness}>FAT</Text>
        </Box>
        <Box>
          <Text>
            {nutrients.CHOLE.quantity.toFixed()} {nutrients.CHOLE.unit}
          </Text>
          <Text fontWeight={fontThickness}>CHOLESTEROL</Text>
        </Box>
        <Box>
          <Text>
            {nutrients.NA.quantity.toFixed()} {nutrients.NA.unit}
          </Text>
          <Text fontWeight={fontThickness}>SODIUM</Text>
        </Box>
      </Flex>
    </>
  );
};
