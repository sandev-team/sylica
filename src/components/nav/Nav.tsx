import React, { useState, useRef, useEffect } from "react";
import {
  StyledNav,
  StyledNavLogoLayout,
  StyledNavMenu,
  StyledNavSidebar,
  StyledSidebarLinks,
} from "./Nav.styles";
import { NavMenus } from "./Nav.subcomponents";

export type NavProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Nav: React.FC<NavProps> = ({ children, className }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const navLogoChildren: React.ReactNode[] = [];
  const navLinksChildren: React.ReactNode[] = [];
  const navActionsChildren: React.ReactNode[] = [];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setSidebarOpen(false);
    }
  };

  const inspectChild = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      const childType = child.type;

      if ((childType as React.ComponentType).displayName) {
        const displayName = (childType as React.ComponentType).displayName;

        if (displayName === "NavLogo") {
          navLogoChildren.push(child.props.children);
        } else if (displayName === "NavLinks") {
          navLinksChildren.push(child.props.children);
        } else if (displayName === "NavActions") {
          navActionsChildren.push(child.props.children);
        }
      }
    }
  };

  React.Children.forEach(children, inspectChild);

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <StyledNav className={className}>
      <StyledNavLogoLayout>{navLogoChildren}</StyledNavLogoLayout>
      <StyledNavMenu>{children}</StyledNavMenu>

      {/* SideBar */}
      <NavMenus onClick={() => setSidebarOpen(!isSidebarOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </NavMenus>
      {isSidebarOpen && (
        <StyledNavSidebar ref={sidebarRef}>
          <StyledSidebarLinks gap="24px">{navLinksChildren}</StyledSidebarLinks>
          <StyledSidebarLinks gap="8px">
            {navActionsChildren}
          </StyledSidebarLinks>
        </StyledNavSidebar>
      )}
    </StyledNav>
  );
};
