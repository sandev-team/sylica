import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 200px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  &:focus {
    border-color: #ed8822;
    box-shadow: 0 0 0 2px rgba(237, 136, 34, 0.2);
  }
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  width: 200px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background-color: white;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
  cursor: pointer;
  &:focus {
    border-color: #ed8822;
    box-shadow: 0 0 0 2px rgba(237, 136, 34, 0.2);
  }
`;

export const Calendar = styled.div`
  position: absolute;
  top: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
`;

export const CustomSelect = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 8px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #ed8822;
  }
`;

export const OptionsContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px; /* Set a max height for the dropdown */
  overflow-y: auto; /* Enable vertical scrolling */
  border: 1px solid #e6e6e6;
  background-color: white;
  z-index: 10;
`;

export const Option = styled.div<{ isSelected: boolean }>`
  padding: 8px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#ed8822" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  &:hover {
    background-color: #ed8822;
    color: white;
  }
`;

export const DateButton = styled.button<{ isSelected: boolean; isDisabled: boolean }>`
  padding: 6px;
  margin: 2px;
  background-color: ${({ isSelected }) => (isSelected ? "#ed8822" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  border: none;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  border-radius: 4px;
  transition: all 0.2s ease;
  opacity: ${({ isDisabled }) =>
    isDisabled ? 0.5 : 1}; /* Disable past dates visually */

  &:hover {
    background-color: ${({ isDisabled }) =>
    isDisabled ? "transparent" : "#ed8822"};
    color: ${({ isDisabled }) => (isDisabled ? "black" : "white")};
  }
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;