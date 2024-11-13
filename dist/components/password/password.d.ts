import { default as React } from "react";
export type PasswordInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: "small" | "medium" | "large" | "fill";
};
declare const PasswordInput: React.FC<PasswordInputProps>;
export default PasswordInput;
