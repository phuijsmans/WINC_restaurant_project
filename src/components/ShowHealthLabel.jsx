import { Flex, Tag } from "@chakra-ui/react";

export const ShowHealthLabel = ({ labelNames, showLabel }) => {
  const results = [];
  //could use a for loop which is faster, but for simplicity we use forEach()
  labelNames.forEach((labelName) => {
    showLabel.forEach((inputLabel) => {
      if (labelName.toLowerCase().includes(inputLabel.toLowerCase())) {
        results.push(labelName);
      }
    });
  });
  return (
    <>
      <Flex flexDir={"row"} gap={2} justify={"center"}>
        {results.map((inputLabel) => (
          <Tag key={inputLabel} bg={"purple.100"}>
            {inputLabel.toUpperCase().replace("-", " ")}
          </Tag>
        ))}
      </Flex>
    </>
  );
};
