import styled from "styled-components";

export const ListCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;

  .img-cont {
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    width: 100%;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e8e8e8;
    padding: 0.5rem 0;

    .btn-cont {
      margin: 1rem 0;
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        margin-left: 1rem;
      }
    }
    .title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #101010;
      margin: 0;
    }

    .title2 {
      font-size: 1rem;
      margin: 0.5rem 0;

      span {
        font-weight: 500;
        color: rgba(16, 16, 16, 0.5);
      }
    }

    .commitment {
      font-size: 1.2rem;
      font-weight: 500;
      color: rgba(16, 16, 16, 0.5);
      margin: 1rem 0;
    }

    .date {
      font-size: 0.7rem;
      color: #585858;
      font-weight: 500;
    }
  }
`;
