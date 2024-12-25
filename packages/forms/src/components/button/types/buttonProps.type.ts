import { MouseEventHandler } from "react";

export type ButtonProps = {
  children?: React.ReactNode; // Use children instead of text
  primary?: boolean;
  size?: "small" | "medium" | "large" | "full"; // Added 'full' size option
  justify?: "left" | "center" | "right";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string; // Allow users to pass in their own className
};