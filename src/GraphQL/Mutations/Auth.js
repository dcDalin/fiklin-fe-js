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
      username
      email {
        emailAddress
        isVerified
      }
    }
  }
`;

const USER_LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      id
      token
      username
      email {
        emailAddress
        isVerified
      }
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { USER_SIGNUP, USER_LOGIN };
