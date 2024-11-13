import { default as React, ChangeEventHandler } from "react";
export type InputProps = {
  value?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};
declare const Input: React.FC<InputProps>;
export default Input;
