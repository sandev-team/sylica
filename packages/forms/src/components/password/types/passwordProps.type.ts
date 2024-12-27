export interface PasswordInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  sizing?: "small" | "medium" | "large" | "fill";
} 