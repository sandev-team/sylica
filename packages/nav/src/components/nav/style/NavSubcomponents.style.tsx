import styled from "@emotion/styled";
import { HTMLProps } from "react";

export const StyledNavLogo = styled.div<HTMLProps<HTMLDivElement>>`
  font-size: 1.5em;
  font-weight: bold;
` as React.FC<HTMLProps<HTMLDivElement>>;

export const StyledNavLinks = styled.div<HTMLProps<HTMLDivElement>>`
  display: flex;
  gap: 32px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: all 0.1s ease-out;

    &:hover {
      color: #ed8822;
    }
  }
` as React.FC<HTMLProps<HTMLDivElement>>;

export const StyledNavActions = styled.div<HTMLProps<HTMLDivElement>>`
  display: flex;
  gap: 8px;
` as React.FC<HTMLProps<HTMLDivElement>>;

export const StyledNavBurger = styled.button<HTMLProps<HTMLButtonElement>>`
  cursor: pointer;
  border: none;
  background: none;

  @media (min-width: 769px) {
    display: none;
  }
` as React.FC<HTMLProps<HTMLButtonElement>>;


