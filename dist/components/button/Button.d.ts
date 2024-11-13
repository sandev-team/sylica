import { default as React, MouseEventHandler } from "react";
export type ButtonProps = {
  children?: React.ReactNode;
  primary?: boolean;
  size?: "small" | "medium" | "large" | "full";
  justify?: "left" | "center" | "right";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
