import auth from '@react-native-firebase/auth';
import store from '../components/Search/redux/reducers/store';
import { updateToken } from '../components/Search/redux/reducers/Users';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({ displayName: fullName });
    console.log(user, 'user');
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      //   console.log('That email address is already in use !');
      return { error: 'That email address is already in use !' };
    } else if (error.code === 'auth/invalid-email') {
      //   console.log('That email address is invalid!');
      return { error: 'Please enter a invalid email address!' };
    }
    return { error: 'Something went wrong with your request!' };
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return { status: false, error: 'Please enter a correct password !' };
    } else if (error.code === 'auth/invalid-credential') {
      return { status: false, error: 'The email you entered does not exist.' };
    }
    console.log(error.code, 'login');
    return { status: false, error: 'Something went wrong !' };
  }
};

export const logOut = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    let response = await auth().currentUser.getIdToken(true);
    console.log(response, 'updating token');
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
