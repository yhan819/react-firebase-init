export interface AuthConfig {
  signInRoute: string,
  signInWithEmailAndPasswordHandler: (email: string, password: string) => void,
  signUpRoute: string,
  signUpWithEmailAndPasswordHandler: (email: string, password: string) => void,
  signOutRoute: string,
  signOutHandler: () => void,
};
