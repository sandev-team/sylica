import React, { useState, useRef, useEffect } from "react";
import { Wrapper, Button, Calendar, Header, CustomSelect, SelectButton, OptionsContainer, Option, DateButton, DaysGrid, Input } from "./style/datepicker.style";
import { DatePickerProps } from "./types/datepickerProps.type";

export const Datepicker: React.FC<DatePickerProps> = ({
  className,
  onChange,
  disablePastDates = false,
  isButton = false,
  children,
  placeholder,
  selectedDate,
}) => {
  const [selectDate, setSelectDate] = useState<Date | null>(
    selectedDate || null,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [isMonthSelectOpen, setIsMonthSelectOpen] = useState(false);
  const [isYearSelectOpen, setIsYearSelectOpen] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handleDateSelect = (day: number) => {
    const newDate = new Date(year, month, day);
    setSelectDate(newDate);
    setIsOpen(false);
    if (onChange) onChange(newDate);
  };

  const handleMonthChange = (newMonth: number) => {
    setMonth(newMonth);
    setIsMonthSelectOpen(false);
  };

  const handleYearChange = (newYear: number) => {
    setYear(newYear);
    setIsYearSelectOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isButton) {
    return (
      <Wrapper>
        {isButton && !className ? (
          <Button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
            {children || "Select a date" || placeholder}
          </Button>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className={className}
          >
            {children || "Select a date" || placeholder}
          </button>
        )}
        {isOpen && (
          <Calendar ref={calendarRef}>
            <Header>
              <CustomSelect>
                <SelectButton
                  onClick={() => setIsMonthSelectOpen(!isMonthSelectOpen)}
                >
                  {new Date(0, month).toLocaleString("default", {
                    month: "long",
                  })}
                </SelectButton>
                <OptionsContainer isVisible={isMonthSelectOpen}>
                  {Array.from({ length: 12 }, (_, i) => (
                    <Option
                      key={i}
                      isSelected={month === i}
                      onClick={() => handleMonthChange(i)}
                    >
                      {new Date(0, i).toLocaleString("default", {
                        month: "long",
                      })}
                    </Option>
                  ))}
                </OptionsContainer>
              </CustomSelect>
              <CustomSelect>
                <SelectButton
                  onClick={() => setIsYearSelectOpen(!isYearSelectOpen)}
                >
                  {year}
                </SelectButton>
                <OptionsContainer isVisible={isYearSelectOpen}>
                  {Array.from({ length: 10 }, (_, i) => (
                    <Option
                      key={i}
                      isSelected={year === year - 5 + i}
                      onClick={() => handleYearChange(year - 5 + i)}
                    >
                      {year - 5 + i}
                    </Option>
                  ))}
                </OptionsContainer>
              </CustomSelect>
            </Header>
            <DaysGrid>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <div
                    key={index}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {day}
                  </div>
                ),
              )}
            </DaysGrid>
            <DaysGrid>
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={index}></div>
              ))}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const isPastDate = new Date(year, month, day) < currentDate; // Check if the date is in the past
                const isToday =
                  new Date(year, month, day).toDateString() ===
                  currentDate.toDateString(); // Check if the date is today
                const isDisabled = disablePastDates && isPastDate && !isToday; // Apply disable logic based on the prop
                return (
                  <DateButton
                    key={i}
                    isSelected={selectDate?.getDate() === day}
                    isDisabled={isDisabled} // Disable button for past dates
                    onClick={() => !isDisabled && handleDateSelect(day)} // Only call if not a past date
                  >
                    {day}
                  </DateButton>
                );
              })}
            </DaysGrid>
          </Calendar>
        )}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper className={className}>
        <Input
          type="text"
          readOnly
          value={selectDate ? selectDate.toLocaleDateString() : ""}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
        />
        {isOpen && (
          <Calendar ref={calendarRef}>
            <Header>
              <CustomSelect>
                <SelectButton
                  onClick={() => setIsMonthSelectOpen(!isMonthSelectOpen)}
                >
                  {new Date(0, month).toLocaleString("default", {
                    month: "long",
                  })}
                </SelectButton>
                <OptionsContainer isVisible={isMonthSelectOpen}>
                  {Array.from({ length: 12 }, (_, i) => (
                    <Option
                      key={i}
                      isSelected={month === i}
                      onClick={() => handleMonthChange(i)}
                    >
                      {new Date(0, i).toLocaleString("default", {
                        month: "long",
                      })}
                    </Option>
                  ))}
                </OptionsContainer>
              </CustomSelect>
              <CustomSelect>
                <SelectButton
                  onClick={() => setIsYearSelectOpen(!isYearSelectOpen)}
                >
                  {year}
                </SelectButton>
                <OptionsContainer isVisible={isYearSelectOpen}>
                  {Array.from({ length: 10 }, (_, i) => (
                    <Option
                      key={i}
                      isSelected={year === year - 5 + i}
                      onClick={() => handleYearChange(year - 5 + i)}
                    >
                      {year - 5 + i}
                    </Option>
                  ))}
                </OptionsContainer>
              </CustomSelect>
            </Header>
            <DaysGrid>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <div
                    key={index}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {day}
                  </div>
                ),
              )}
            </DaysGrid>
            <DaysGrid>
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={index}></div>
              ))}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const isPastDate = new Date(year, month, day) < currentDate; // Check if the date is in the past
                const isToday =
                  new Date(year, month, day).toDateString() ===
                  currentDate.toDateString(); // Check if the date is today
                const isDisabled = disablePastDates && isPastDate && !isToday; // Apply disable logic based on the prop
                return (
                  <DateButton
                    key={i}
                    isSelected={selectDate?.getDate() === day}
                    isDisabled={isDisabled} // Disable button for past dates
                    onClick={() => !isDisabled && handleDateSelect(day)} // Only call if not a past date
                  >
                    {day}
                  </DateButton>
                );
              })}
            </DaysGrid>
          </Calendar>
        )}
      </Wrapper>
    );
  }
};
