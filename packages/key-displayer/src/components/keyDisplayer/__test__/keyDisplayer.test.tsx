import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KeyDisplayer } from "../keyDisplayer";

describe("KeyDisplayer component", () => {
  it("KeyDisplayer should render correctly", () => {
    const mockValue = "your-key-value";
    const mockOnClick = () => {};

    render(<KeyDisplayer value={mockValue} onClick={mockOnClick} size="medium" />);
    const keyDisplayerElement = screen.getByText("•".repeat(12));
    expect(keyDisplayerElement).toBeInTheDocument();
  });
});
