import { default as React, ReactNode } from "react";
type DatePickerProps = {
  className?: string;
  onChange?: (date: Date) => void;
  disablePastDates?: boolean;
  isButton?: boolean;
  children?: ReactNode;
};
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
