import React from "react";
import {
  StyledNavLogo,
  StyledNavLinks,
  StyledNavActions,
  StyledNavBurger,
} from "./style/NavSubcomponents.style.tsx";

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
