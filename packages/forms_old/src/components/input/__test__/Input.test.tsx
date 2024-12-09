import { describe, vi, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../index";
import React from "react";

describe("Input Component", () => {
  it("renders correctly with placeholder", () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("displays loading state", () => {
    render(<Input isLoading={true} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("aria-busy", "true");
  });

  it("renders with a value", () => {
    render(<Input value="Test value" />);
    const inputElement = screen.getByDisplayValue("Test value");
    expect(inputElement).toBeInTheDocument();
  });
});
