import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import Scanner from './app/screens/Scanner'
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { Text, Pressable } from 'react-native';

//magamit nga sites
//https://reactnavigation.org/docs/header-buttons
//https://blog.tokensoft.io/creating-a-custom-dropdown-header-component-with-react-navigation-65b751b7784c
//https://blog.logrocket.com/creating-custom-react-native-dropdown/
//https://github.com/react-navigation/react-navigation/issues/1212

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', }}>PARKIIT Logger</Text>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);

    });
  }, []);
  
  //⋮
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        { user ? (
          <Stack.Screen name="Scanner" component={Scanner} 
            options={{ 
              headerStyle: {
                backgroundColor: '#3498db',
              },
              headerTintColor: '#ffffff',
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <Pressable style={{ borderWidth: 1, padding: 5 }} onPress={() => FIREBASE_AUTH.signOut()}>
                  <Text style={{ fontSize: 13 }}>Logout</Text>
                </Pressable>
              ),
            }} />
        ) : (
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}
