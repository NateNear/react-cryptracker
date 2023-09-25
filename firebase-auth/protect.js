import { auth } from './firebase';

const isAuthenticated = () => {
  const user = auth.currentUser;
  return !!user;
};

export default isAuthenticated;
