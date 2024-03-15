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

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [email, setemail] = useState('');
  const [pawd, setpawd] = useState('');
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
        <TextInput
          placeholder="email"
          mode="outlined"
          value={email}
          onChangeText={text => setemail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          mode="outlined"
          value={pawd}
          onChangeText={text => setpawd(text)}
          style={styles.input}
          secureTextEntry
        />
        {newUser && (
          <TextInput
            placeholder="confirm password"
            mode="outlined"
            value={pawd}
            onChangeText={text => setpawd(text)}
            style={styles.input}
            secureTextEntry
          />
        )}
        <TouchableOpacity style={styles.loginBtn}>
          {newUser ? (
            <Text style={styles.btntext}>Sing up</Text>
          ) : (
            <Text style={styles.btntext}>Login</Text>
          )}
        </TouchableOpacity>
        <View style={styles.social}>
          <Text>or sign up with</Text>
          <View style={styles.socaillogos}>
            <TouchableOpacity>
              <Image source={google} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={facebook} />
            </TouchableOpacity>
          </View>

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
