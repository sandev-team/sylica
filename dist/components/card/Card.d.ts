import { FC, ReactNode } from "react";
export type CardProps = {
  title?: string;
  content?: ReactNode;
  footer?: ReactNode;
  className?: string;
};
declare const Card: FC<CardProps>;
export default Card;
