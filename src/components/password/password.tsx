import React, { useState } from "react";
import styled from "styled-components";

export type PasswordInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: "small" | "medium" | "large" | "fill";
};

const Wrapper = styled.div<PasswordInputProps & { isFocused: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.isFocused ? "#ED8822" : "#e6e6e6")};
  border-radius: 8px;
  padding: 6px 12px;
  background: #fff;
  width: ${(props) => (props.size === "fill" ? "100%" : "fit-content")};
  box-shadow: ${(props) =>
    props.isFocused ? "0 0 0 2px rgba(237, 136, 34, 0.2)" : "none"};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
`;

const Input = styled.input<PasswordInputProps>`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 4px 8px;
  flex: 1;
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "medium"
        ? "200px"
        : props.size === "large"
          ? "300px"
          : "100%"};
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
`;

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder = "Enter password...",
  value,
  onChange,
  className,
  size = "medium",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <Wrapper className={className} size={size} isFocused={isFocused}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <ToggleButton onClick={handleToggle}>
        {showPassword ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1="1" x2="23" y1="1" y2="23" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        }
      </ToggleButton>
    </Wrapper>
  );
};

export default PasswordInput;
