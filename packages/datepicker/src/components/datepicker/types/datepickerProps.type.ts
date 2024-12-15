import { ReactNode } from "react";

export type DatePickerProps = {
  className?: string;
  onChange?: (date: Date) => void;
  disablePastDates?: boolean; // New prop to enable/disable past date selection
  isButton?: boolean;
  children?: ReactNode;
  placeholder?: string;
  selectedDate?: Date;
};