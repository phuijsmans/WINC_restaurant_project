import { Tag } from "@chakra-ui/react";
import { useState } from "react";

export const ShowHealthLabel = ({ labelNames, showLabel }) => {
  const inputToUpperCase = showLabel.toUpperCase();
  const [isLabel, setLabel] = useState(
    labelNames.map((label) => label.toUpperCase()).includes(inputToUpperCase)
  );
  return (
    <>
      {isLabel ? (
        <Tag bg={"purple.100"}>{inputToUpperCase.replace("-", " ")}</Tag>
      ) : (
        <> </>
      )}
    </>
  );
};
