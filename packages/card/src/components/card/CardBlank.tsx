import { FC } from "react";
import { CardBlankProps } from "./types/cardProps.type";
import { StyledCard } from "./style/cardBlank.style";

export const CardBlank: FC<CardBlankProps> = ({ className, children, ...props }) => {
  return (
    <StyledCard className={className ? className : undefined} {...props}>
      {children}
    </StyledCard>
  );
};
