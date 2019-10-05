import gql from 'graphql-tag';

const USER_SIGNUP = gql`
  mutation SignupUser(
    $username: String!
    $emailAddress: String!
    $password: String!
    $confirmPassword: String!
  ) {
    userSignUp(
      userSignUpInput: {
        username: $username
        emailAddress: $emailAddress
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      token
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { USER_SIGNUP };
