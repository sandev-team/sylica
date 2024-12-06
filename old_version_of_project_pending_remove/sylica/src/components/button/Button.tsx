import React, { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

export type ButtonProps = {
  children?: React.ReactNode; // Use children instead of text
  primary?: boolean;
  size?: "small" | "medium" | "large" | "full"; // Added 'full' size option
  justify?: "left" | "center" | "right";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string; // Allow users to pass in their own className
};

// Helper functions for dynamic styles
const getPadding = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "6px 12px";
    case "medium":
      return "8px 24px";
    case "large":
      return "16px 48px";
    case "full":
    default:
      return "8px 24px";
  }
};

const getFontSize = (size: ButtonProps["size"]) => {
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
const StyledButton = styled.button<ButtonProps>`
  ${(props) =>
    !props.className &&
    css`
      display: flex;
      align-items: center;
      justify-content: ${props.justify};
      gap: 8px;
      line-height: 1;
      font-size: ${getFontSize(props.size)};
      font-weight: 500;
      border-radius: 8px;
      cursor: pointer;
      border: ${props.primary ? "none" : "1px solid #E6E6E6"};
      color: ${props.primary ? "#fff" : "#000"};
      background-color: ${props.primary ? "#ED8822" : "#FFFFFF"};
      padding: ${getPadding(props.size)};
      min-width: 90px;
      width: ${props.size === "full" ? "100%" : "fit-content"};
      height: ${props.size === "full" ? "100%" : "auto"};
      transition:
        background-color 0.2s,
        transform 0.1s;

      &:hover {
        background-color: ${props.primary ? "#D9731D" : "#F7F7F7"};
      }

      &:active {
        background-color: ${props.primary ? "#C8651A" : "#E6E6E6"};
        transform: scale(0.98);
      }
    `}
`;

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
