import gql from 'graphql-tag';

const Group = gql`
  mutation Group($name: String) {
    createGroup(name: $name) {
      name
    }
  }
`;

const Organization = gql`
  mutation createOrganization(
    $name: String!
    $country: String
    $state: String
    $description: String
    $email: String
    $password: String
  ) {
    createOrganization(
      name: $name
      password: $password
      description: $description
      state: $state
      email: $email
      country: $country
    ) {
      name
    }
  }
`;

export { Group, Organization };
