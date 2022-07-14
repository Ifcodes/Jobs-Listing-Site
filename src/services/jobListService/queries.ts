import { gql } from "@apollo/client";

export const GET_JOBLIST = gql`
  query GetJoblist {
    jobs {
      id
      title
      commitment {
        title
      }
      createdAt
      postedAt
      isFeatured
      remotes {
        name
      }
      company {
        name
        websiteUrl
        logoUrl
      }
    }
  }
`;
