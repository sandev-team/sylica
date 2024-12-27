import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Password } from "../password";

describe("Password component", () => {
  it("Password should render correctly", () => {
    render(<Password />);
    const PasswordInputElement = screen.getByRole("input");
    expect(PasswordInputElement).toBeInTheDocument();
  });
});
