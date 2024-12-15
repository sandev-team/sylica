import React from "react";
import "./style/CustomFieldset.css";
import { FieldsetProps } from "./types/fieldsetProps.type";

export const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  children,
  className,
  disable = false,
}) => {
  return (
    <fieldset className={`${className} ${disable ? "disabled-fieldset" : ""}`}>
      {legend && <legend>{legend}</legend>}
      <div
        style={{
          opacity: disable ? 0.5 : 1,
          pointerEvents: disable ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </fieldset>
  );
};
