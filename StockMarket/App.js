import React, {useState, useEffect} from 'react';
// import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
// import AuthNavigator from './src/auth/authNavigator/index';
import StackNavigation from './src/homeNavigator/index';
import Landing from './src/landing/landing';
export default function App() {
  const [init, setinit] = useState(true);
  const [user, setuser] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setuser(true);
    }, 3000);
  }, []);

  if (user) {
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    );
  } else {
    return <Landing />;
  }
}
