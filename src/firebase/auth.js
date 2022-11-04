import { UserAuth } from '../context/UserContext';

const { googleLogIn } = UserAuth();

export const logInWithGoogle = async () => {
  try {
    await googleLogIn();
  } catch (error) {
    error.log(error);
  }
};
