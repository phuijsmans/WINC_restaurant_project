import { Button as CButton } from "@chakra-ui/react";

export const Button = ({ clickFn, ...props }) => {
  return (
    <>
      <CButton onClick={clickFn} {...props}></CButton>
    </>
  );
};
