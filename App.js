// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import AuthStack from './src/navigation/authstack'


// function App() {
//   return (
//     <NavigationContainer>
      
//       <AuthStack />
//     </NavigationContainer>
//   );
// }

// export default App;



import React from 'react'

import Onboardingscreen from './src/screens/OnboardingScreen'
import Loginscreen from './src/screens/Loginscreen'
import RegistrationScreen from './src/screens/RegistrationScreen'
import firstpage from './src/screens/firstpage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const  App = () => {
  
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name='onboarding' component={Onboardingscreen}/> */}
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="firstpage" component={firstpage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
    


export default App;