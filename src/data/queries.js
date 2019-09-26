import gql from 'graphql-tag';

const Test = gql`
  query {
    info
  }
`;

const Organization = gql`
  query {
    organization(where: { id: "cjzuenzqh007k0a34qveq8o08" }) {
      name
      type
      email
      country
      state
      createdAt
      id
    }
  }
`;

export { Test, Organization };
