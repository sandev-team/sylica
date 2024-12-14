import styled from "@emotion/styled";

export const StyledCard = styled.div`
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
        width: 100%;

        .card-header {
          font-size: 1.25em;
          font-weight: bold;
        }

      `}
`;