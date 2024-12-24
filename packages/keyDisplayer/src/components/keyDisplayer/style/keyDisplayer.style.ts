import styled from "@emotion/styled";
import { KeyDisplayProps, WrapperProps } from "../types/keyDisplayerProps.type";


export const Wrapper: React.FC<WrapperProps> = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 6px 12px;
  background: #fff;
  width: ${(props) => (props.size === "fill" ? "" : "fit-content")};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
`;

export const KeyDisplay: React.FC<KeyDisplayProps & { copied: boolean }> = styled.span<KeyDisplayProps & { copied: boolean }>`
  font-size: 16px;
  padding: 4px 8px;
  color: ${(props) => (props.copied ? "#ED8822" : "#333")};
  cursor: pointer;
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "medium"
        ? "200px"
        : props.size === "large"
          ? "300px"
          : "100%"};
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  transition: color 0.1s ease; // Smooth color transition
`;

export const ToggleButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
`;