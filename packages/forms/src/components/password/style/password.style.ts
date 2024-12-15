import styled from "@emotion/styled";
import { PasswordInputProps } from "../types/passwordProps.type"

export const Wrapper = styled.div<PasswordInputProps & { isFocused: boolean }>`
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

export const Input = styled.input<PasswordInputProps>`
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

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
`;