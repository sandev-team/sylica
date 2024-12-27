import React, { useState } from "react";
import { PasswordInputProps } from "./types/passwordProps.type"
import {Wrapper, Input, ToggleButton} from "./style/password.style"

export const Password: React.FC<PasswordInputProps> = ({
  placeholder = "Enter password...",
  value,
  onChange,
  className,
  sizing = 'small',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <Wrapper className={className} sizing={sizing} isFocused={isFocused}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sizing={sizing}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <ToggleButton onClick={handleToggle}>
        {showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1="1" x2="23" y1="1" y2="23" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="main-grid-item-icon"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </ToggleButton>
    </Wrapper>
  );
};
