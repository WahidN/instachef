export const getErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/email-already-in-use':
      return 'There is already an user with this email adres!';
    case 'auth/user-not-found':
      return 'No user found with that email!';
    default:
      return '';
  }
};
