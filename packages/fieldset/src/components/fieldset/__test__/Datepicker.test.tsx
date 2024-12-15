import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Datepicker } from "../Fieldset";

describe("DatePicker component", () => {
  it("should render an input with a placeholder", () => {
    render(
      <Datepicker
        disablePastDates={true}
        onChange={(date) => console.log("Selected date:", date)}
        placeholder="Select a date"
      >
        Select Date
      </Datepicker>,
    );
    const input = screen.getByPlaceholderText("Select a date");
    expect(input).toBeInTheDocument();
  });

  it("should display the selected date in the input", () => {
    const selectedDate = new Date(2024, 9, 28);
    render(<Datepicker selectedDate={selectedDate} onChange={() => {}} />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("10/28/2024");
  });
});
