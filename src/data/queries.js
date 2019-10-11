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

const FetchDepartment = gql`
  query getDepartment {
    department(where: { id: "ck1kvb4ue00040739vm08hjfi" }) {
      name
      description
    }
  }
`;

export { Test, Organization, FetchDepartment };
