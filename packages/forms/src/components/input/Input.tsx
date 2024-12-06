import React, { ChangeEventHandler } from "react";
import { styled } from "@linaria/react";

export type InputProps = {
  value?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string; // Allow users to pass in their own className
};

// Helper functions for dynamic styles
const getPadding = (size: InputProps["size"]) => {
  switch (size) {
    case "small":
      return "6px 8px";
    case "medium":
      return "8px 12px";
    case "large":
      return "10px 16px";
    default:
      return "8px 12px";
  }
};

const getFontSize = (size: InputProps["size"]) => {
  switch (size) {
    case "small":
      return "13.33px";
    case "medium":
      return "16px";
    case "large":
      return "19.2px";
    default:
      return "16px";
  }
};

// Styled Component
const StyledInput = styled.input<InputProps>`
  border: ${({ className }) => (!className ? "1px solid #e6e6e6" : "inherit")};
  border-radius: ${({ className }) => (!className ? "4px" : "inherit")};
  padding: ${({ className, size }) =>
    !className ? getPadding(size) : "inherit"};
  font-size: ${({ className, size }) =>
    !className ? getFontSize(size) : "inherit"};
  width: ${({ className }) => (!className ? "100%" : "inherit")};
  box-sizing: border-box;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: ${({ className }) => (!className ? "#ed8822" : "inherit")};
    box-shadow: ${({ className }) =>
      !className ? "0 0 0 2px rgba(237, 136, 34, 0.2)" : "inherit"};
  }
`;

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  size = "medium",
  onChange,
  className,
  ...props
}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      placeholder={placeholder}
      size={size}
      onChange={onChange}
      className={className}
      {...props}
    />
  );
};
