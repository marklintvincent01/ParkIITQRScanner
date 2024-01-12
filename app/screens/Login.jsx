import { Text, View, TextInput, StyleSheet, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async() => {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
      console.log(error)
      alert('Sign in failed: ' + error.message);
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.titlearea}>
          <Text style={styles.title}>PARKIIT Logger</Text>
        </View>
        <TextInput value={email} style={styles.input} placeholder="email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>

        { loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Button title="Login" onPress={signIn} />
          </>
        )}
      </KeyboardAvoidingView>
    </View> 
  );

};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  },
  titlearea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});