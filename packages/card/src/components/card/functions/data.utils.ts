import { ButtonProps } from "../types/cardProps.type";

// Helper functions for dynamic styles
export const getPadding = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "6px 12px";
    case "medium":
      return "8px 24px";
    case "large":
      return "16px 48px";
    case "full":
    default:
      return "8px 24px";
  }
};

export const getFontSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "13.33px";
    case "medium":
      return "16px";
    case "large":
      return "19.2px";
    default:
      return "16px";
  }
};