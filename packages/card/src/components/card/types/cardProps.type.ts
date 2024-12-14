import { ReactNode } from "react";

export type CardBlankProps = {
  children?: ReactNode;
  className?: string;
};

export type CardProps = {
  title?: string;
  content?: ReactNode;
  footer?: ReactNode;
  className?: string;
};
