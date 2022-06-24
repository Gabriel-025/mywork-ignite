import { gql } from "@apollo/client";

export const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      description
    }
  }
`; 
