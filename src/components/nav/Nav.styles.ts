import styled from "styled-components";

// Shared Styles
const sharedFlex = `
  display: flex;
  align-items: center;
`;

const hiddenOnMobile = `
  @media (max-width: 768px) {
    display: none;
  }
`;

const sharedLinkStyles = `
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.1s ease-out;

  &:hover {
    color: #ed8822;
  }
`;

// Styled Components
export const StyledNav = styled.nav`
  width: 100%;
  ${sharedFlex};
  justify-content: space-between;
  padding: 8px 24px;
  overflow: hidden;
`;

export const StyledNavLogoLayout = styled.div`
  flex: 1;
  ${sharedFlex};
  justify-content: space-between;
  font-size: 1.5em;
  font-weight: bold;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledNavMenu = styled.div`
  flex: 1;
  ${sharedFlex};
  justify-content: space-between;

  ${hiddenOnMobile};
`;

export const StyledNavSidebar = styled.div`
  height: 100vh;
  width: 200px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  top: 0;
  right: 0;
  z-index: 999;
  padding: 16px;
  border-radius: 8px 0 0 8px;
  border: 1px solid #e6e6e6;
  border-right: none;
  background: white;
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const StyledSidebarLinks = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "24px"};

  a {
    ${sharedLinkStyles}
  }
`;
