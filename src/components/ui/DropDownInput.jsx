import { FormControl, Select } from "@chakra-ui/react";

export const DropDownInput = ({ changeFn, ...props }) => {
  return (
    <>
      <FormControl {...props}>
        <Select onChange={changeFn}>
          <option value="recipeName">Recipe name</option>
          <option value="healthLabel">Health label</option>
        </Select>
      </FormControl>
    </>
  );
};
