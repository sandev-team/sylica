import React from "react";
import { ButtonProps } from "./types/buttonProps.type";
import { StyledButton } from "./style/button.style";

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  primary = false,
  justify = "center",
  onClick,
  className,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      size={size}
      primary={primary}
      justify={justify}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
