import styled from "@emotion/styled";
import { ButtonProps } from "../types/buttonProps.type";
import { getPadding, getFontSize } from "../functions/data.utils";

// Styled Component
export const StyledButton = styled.button<ButtonProps>`
  ${(props) =>
    !props.className &&
    `
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
