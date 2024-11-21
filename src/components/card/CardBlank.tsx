import { FC, ReactNode } from "react";
import styled from "styled-components";

export type CardProps = {
  children?: ReactNode;
  className?: string;
};

const StyledCard = styled.div`
  ${(props) =>
    props.className
      ? ""
      : `
        border: 1px solid black;
        padding: 24px 24px;
        border-radius: 8px;
        background-color: #fff;
        width: 100%;
      `}
`;

export const CardBlank: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <StyledCard className={className ? className : undefined} {...props}>
      {children}
    </StyledCard>
  );
};
