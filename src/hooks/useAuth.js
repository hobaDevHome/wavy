import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../config/firebase';

const useAuth = () => {
  const [user, setuser] = useState({});

  useEffect(() => {
    console.log('user in useauth', user);
    onAuthStateChanged(auth, user => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
  });

  return {user};
};

export default useAuth;
