import gql from 'graphql-tag';

const Group = gql`
  mutation Group($name: String) {
    createGroup(name: $name) {
      name
    }
  }
`;

const Organization = gql`
  mutation createOrg(
    $name: String
    $password: String
    $description: String
    $email: String
    $country: String
    $state: String
  ) {
    createOrganization(
      name: $name
      password: $password
      description: $description
      state: $state
      email: $email
      country: $country
    )
  }
`;

export { Group, Organization };
