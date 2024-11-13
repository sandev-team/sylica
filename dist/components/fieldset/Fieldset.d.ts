import { default as React } from "react";
interface FieldsetProps {
  legend?: string;
  children: React.ReactNode;
  className?: string;
  disable?: boolean;
}
declare const Fieldset: React.FC<FieldsetProps>;
export default Fieldset;
