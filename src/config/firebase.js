import authentication from '@react-native-firebase/auth';
import fireStore from '@react-native-firebase/firestore';
import store from '@react-native-firebase/storage';

const db = fireStore();
const auth = authentication();
const storage = store();

export {db, auth, storage};
