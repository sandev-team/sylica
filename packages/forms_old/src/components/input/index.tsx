import { cx } from "@linaria/core";
import tw, { css, styled } from "twin.macro";

export interface InputProps {
  isLoading?: boolean;
  hasError?: boolean;
  className?: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; // Added placeholder prop
  value?: string; // Added value prop
}

const StyledInput = styled.input<InputProps>`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ hasError = false }) => (hasError ? "red" : "gray")};
  border-radius: 0.375rem;
  transition: border-color 0.2s;

  &:focus {
    border-color: blue;
    outline: none;
  }

  @media (min-width: 640px) {
    padding: 0.75rem 1.5rem;
  }
`;

export function Input({
  isLoading,
  hasError,
  className,
  onInputChange,
  placeholder,
  value,
}: InputProps) {
  return (
    <StyledInput
      aria-busy={isLoading}
      aria-invalid={hasError}
      className={className}
      hasError={hasError}
      onInput={onInputChange}
      placeholder={placeholder} // Pass placeholder to StyledInput
      value={value} // Pass value to StyledInput
    />
  );
}
