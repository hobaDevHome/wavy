import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/constants';
import {TextInput} from 'react-native-paper';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  GoogleSignin,
  signInWithCredential,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import {auth} from '../../config/firebase';
import {mapAuthCodeToMessage} from '../utils/mapFirebaseErrors';

const Login = ({navigation}) => {
  const [newUser, setNewUser] = useState(false);
  const [email, setemail] = useState('');
  const [pawd, setpawd] = useState('');
  const [name, setname] = useState('');
  const [errorMsg, seterrorMsg] = useState('');

  const provider = new GoogleAuthProvider();

  const handlesingup = async () => {
    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, pawd);

      await updateProfile(user, {
        displayName: name,
      });
    } catch (error) {
      console.log(error);
      seterrorMsg(mapAuthCodeToMessage(error.code));
    }
  };
  const handlesingin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pawd);
    } catch (error) {
      console.log(error);
      seterrorMsg(mapAuthCodeToMessage(error.code));
    }
  };

  const handlesingUpWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const handlesingInWithGoogle = async () => {
    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, pawd);

      await updateProfile(user, {
        displayName: name,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ImageBackground
      source={require('../images/Login.png')}
      style={styles.image}>
      <View>
        <Text style={styles.title}>
          Wavy <Text style={styles.span}>Shop</Text>
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        {newUser && (
          <TextInput
            placeholder="name"
            mode="outlined"
            value={name}
            onChangeText={text => {
              seterrorMsg('');
              setname(text);
            }}
            style={styles.input}
          />
        )}
        <TextInput
          placeholder="email"
          mode="outlined"
          value={email}
          onChangeText={text => {
            seterrorMsg('');
            setemail(text);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          mode="outlined"
          value={pawd}
          onChangeText={text => {
            seterrorMsg('');
            setpawd(text);
          }}
          style={styles.input}
          secureTextEntry
        />
        {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>}
        {newUser ? (
          <TouchableOpacity style={styles.loginBtn} onPress={handlesingup}>
            <Text style={styles.btntext}>Sing up</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.loginBtn} onPress={handlesingin}>
            <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
        )}

        <View style={styles.social}>
          {/* <Text>or sign up with</Text>
          <View style={styles.socaillogos}>
            <TouchableOpacity onPress={handlesingUpWithGoogle}>
              <Image source={google} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={facebook} />
            </TouchableOpacity>
          </View> */}

          {newUser ? (
            <Pressable style={styles.notreg} onPress={() => setNewUser(false)}>
              <Text>
                already a user ?
                <Text style={{fontWeight: 'bold', color: colors.balck}}>
                  {' '}
                  login
                </Text>
              </Text>
            </Pressable>
          ) : (
            <Pressable style={styles.notreg} onPress={() => setNewUser(true)}>
              <Text>
                Not register yet ?
                <Text style={{fontWeight: 'bold', color: colors.balck}}>
                  {' '}
                  Create Account
                </Text>
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  social: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  socaillogos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  notreg: {marginTop: 20, fontWeight: 'bold'},
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.balck,
    fontSize: 48,

    textAlign: 'center',
    marginHorizontal: 25,
  },

  span: {
    color: colors.darkGreen,
    fontWeight: 'bold',
  },
  input: {
    width: 320,
    height: 40,
    marginVertical: 10,
  },
  loginBtn: {
    width: 320,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.darkGreen,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  btntext: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
