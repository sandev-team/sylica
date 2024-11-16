import React from "react";
import { Datepicker } from "../Datepicker";
import styled from "styled-components";

// Custom button styling
const CustomButton = styled.button`
  background-color: #007bff;
  color: white;
  font-weight: bold;
`;

const App = () => {
  return (
    <div>
      {/* DatePicker as Button with custom styling */}
      <Datepicker
        isButton={true}
        className={CustomButton} // Custom class only applies to the button
        disablePastDates={true}
        onChange={(date) => console.log("Selected date:", date)}
      >
        Select Date
      </Datepicker>

      {/* DatePicker as Input without custom styling */}
      <Datepicker
        isButton={false}
        disablePastDates={true}
        onChange={(date) => console.log("Selected date:", date)}
      />
    </div>
  );
};

export default App;
