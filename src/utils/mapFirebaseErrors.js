export function mapAuthCodeToMessage(authCode) {
  switch (authCode) {
    case 'auth/invalid-password':
      return 'Password provided is not corrected';

    case 'auth/invalid-email':
      return 'Email provided is invalid';

    case 'auth/email-already-exists':
      return 'Email already exists';

    case 'auth/user-not-found':
      return 'User not ound';

    case 'auth/email-already-in-use':
      return 'Email already exists';

    case 'auth/weak-password':
      return 'Password should be at least 6 characters';

    case 'auth/wrong-password':
      return 'Wrong password';

    default:
      return '';
  }
}
