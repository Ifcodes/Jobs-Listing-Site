import styled from "styled-components";

export const GroupJobWrapper = styled.div`
  width: 100%;

  .group-date {
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;

    .date {
      width: max-content;
      color: #101010;
      font-size: 1.4rem;
      font-weight: 700;
      margin-right: 1rem;
    }

    hr {
      width: 100%;
      height: 1px;
      background-color: rgba(124, 123, 123, 0.3);
      border: #7c7b7b;
    }
  }

  .dataList-cont {
    display: flex;
    flex-direction: column;
  }
`;
