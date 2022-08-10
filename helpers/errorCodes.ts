export const getErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/email-already-in-use':
      return 'There is already an user with this email adres!';
    case 'auth/user-not-found':
      return 'No user found with that email!';
    case 'auth/wrong-password':
      return 'Password is incorrect!';
    case 'auth/too-many-requests':
      return ' Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
    default:
      return 'Something went wrong, please try again!';
  }
};
