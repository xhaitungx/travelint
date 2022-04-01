import React from "react";
import { Button } from "@mui/material";
const ButtonCustom = ({
  type,
  nameString,
  disabled,
  style,
  variant,
  customFunction,
}) => {
  return (
    <Button
      type={type}
      sx={style}
      disabled={disabled}
      variant={variant}
      onClick={customFunction}
    >
      {nameString}
    </Button>
  );
};

export default ButtonCustom;
