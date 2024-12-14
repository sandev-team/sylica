import styled from "@emotion/styled";

export const StyledCard = styled.div`
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