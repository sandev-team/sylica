import { FC } from "react";
import { Input, InputProps } from "@sylica/forms";

const Example: FC<InputProps> = ({
  value,
  placeholder,
  size,
  onChange,
  className = "",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Input
        value={value}
        placeholder={placeholder}
        size={size}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Example;
