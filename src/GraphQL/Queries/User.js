import gql from 'graphql-tag';

const LOGGED_IN_USER = gql`
  query LoggedInUser {
    me {
      id
      username
      email {
        emailAddress
        isVerified
      }
      phone {
        phoneNumber
        isVerified
      }
      roles
    }
  }
`;

const LOGGED_IN_USER_ROLES = gql`
  query LoggedInUserRoles {
    me {
      roles
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { LOGGED_IN_USER, LOGGED_IN_USER_ROLES };
