import {initializeApp} from 'firebase/app';

import {getAuth} from 'firebase/auth';

import {getFirestore} from '@firebase/firestore';
import {getStorage} from '@firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCoRf0nn5q8EH8oSRC0MGHH3kkwqFoT6Og',
  authDomain: 'sarhan-redux.firebaseapp.com',
  databaseURL: 'https://sarhan-redux-default-rtdb.firebaseio.com',
  projectId: 'sarhan-redux',
  storageBucket: 'sarhan-redux.appspot.com',
  messagingSenderId: '93036002516',
  appId: '1:93036002516:web:edfb1ea6e2e577b9358f41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
