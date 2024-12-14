import { FC } from "react";
import { StyledCard } from "./style/card.style";
import { CardProps } from "./types/cardProps.type";

export const Card: FC<CardProps> = ({
  title,
  content,
  footer,
  className,
  ...props
}) => {
  return (
    <StyledCard className={className ? className : undefined} {...props}>
      {title && <div className="card-header">{title}</div>}
      {content}
      {footer}
    </StyledCard>
  );
};
