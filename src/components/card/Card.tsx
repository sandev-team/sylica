import { FC, ReactNode } from "react";
import styled from "styled-components";

export type CardProps = {
  title?: string;
  content?: ReactNode;
  footer?: ReactNode;
  className?: string;
};

const StyledCard = styled.div`
  ${(props) =>
    props.className
      ? "" // If a className is provided, skip applying default styles
      : `
  border: 1px solid #e0e0e0;
  padding: 24px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  display: flex;
  gap: 24px;
  flex-direction: column;

  .card-header {
    font-size: 1.25em;
    font-weight: bold;
  }

`}
`;

const Card: FC<CardProps> = ({ title, content, footer, className }) => {
  return (
    <StyledCard className={className ? className : undefined}>
      {title && <div className="card-header">{title}</div>}
      {content}
      {footer}
    </StyledCard>
  );
};

export default Card;
