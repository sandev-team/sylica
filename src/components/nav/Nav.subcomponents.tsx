import React from "react";
import styled from "styled-components";

const StyledNavLogo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const StyledNavLinks = styled.div`
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
`;

const StyledNavActions = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledNavBurger = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavLogo: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <StyledNavLogo className={className}>{children}</StyledNavLogo>
);
NavLogo.displayName = "NavLogo";

export const NavLinks: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <StyledNavLinks className={className}>{children}</StyledNavLinks>
);
NavLinks.displayName = "NavLinks";

export const NavActions: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <StyledNavActions className={className}>{children}</StyledNavActions>
);
NavActions.displayName = "NavActions";

export const NavMenus: React.FC<{
  onClick: () => void;
  children?: React.ReactNode;
}> = ({ onClick, children }) => (
  <StyledNavBurger onClick={onClick}>{children}</StyledNavBurger>
);
