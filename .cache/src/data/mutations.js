import gql from 'graphql-tag';

const Event = gql`
  mutation Event(
    $name: String!
    $website: String
    $password: String!
    $description: String
    $leads: Int
    $members: Int
    $teams: Int
    $email: String
  ) {
    createGroup(
      name: $name
      password: $password
      description: $description
      email: $email
      website: $website
      leads: $leads
      teams: $teams
      members: $members
    ) {
      name
    }
  }
`;

const Group = gql`
  mutation Group(
    $name: String!
    $website: String
    $password: String!
    $description: String
    $leads: Int
    $members: Int
    $teams: Int
    $email: String
  ) {
    createGroup(
      name: $name
      password: $password
      description: $description
      email: $email
      website: $website
      leads: $leads
      teams: $teams
      members: $members
    ) {
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
    $website: String
  ) {
    createOrganization(
      name: $name
      password: $password
      description: $description
      state: $state
      email: $email
      country: $country
      website: $website
    ) {
      name
    }
  }
`;

const LoginOrganization = gql`
  mutation loginOrg($email: String!, $name: String!, $password: String!) {
    loginOrganization(
      where: { email: $email }
      name: $name
      password: $password
    ) {
      token
      organization {
        name
        password
      }
    }
  }
`;

const CreateTeam = gql`
  mutation createTeam($name: String!, $description: String, $leads: Int) {
    createDepartment(name: $name, description: $description, leads: $leads) {
      name
    }
  }
`;

export { Group, LoginOrganization, Organization, Event, CreateTeam };
