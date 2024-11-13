import { default as React } from "react";
export type NavProps = {
  children?: React.ReactNode;
  className?: string;
};
declare const Nav: React.FC<NavProps>;
export declare const NavLogo: React.FC<NavProps>;
export declare const NavLinks: React.FC<NavProps>;
export declare const NavActions: React.FC<NavProps>;
export declare const NavMenus: React.FC<{
  onClick: () => void;
  children?: React.ReactNode;
}>;
export default Nav;
