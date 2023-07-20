import { Tag } from "@chakra-ui/react";
import { useState } from "react";

export const ShowHealthLabel = ({ labelNames, input }) => {
  const labelNameToUpperCase = input.toUpperCase();
  const [isLabel, setLabel] = useState(
    labelNames
      .map((label) => label.toUpperCase())
      .includes(labelNameToUpperCase)
  );
  return (
    <>
      {isLabel ? <Tag bg={"purple.100"}>{labelNameToUpperCase}</Tag> : <> </>}
    </>
  );
};
