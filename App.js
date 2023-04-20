import { createStackNavigator, } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import home from './screens/home';
import details from './screens/details';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    background: 'transparent',
  }
}

export default  App = () =>{

  const [loaded] = useFonts({
      InterBold: require('./assets/fonts/Inter-Bold.ttf'),
      InterLight: require('./assets/fonts/Inter-Light.ttf'),
      InterSemibold: require('./assets/fonts/Inter-SemiBold.ttf'),
      InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
      InterRegular: require('./assets/fonts/Inter-Regular.ttf'),  
    });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
          screenOptions={{ headerShown: false}}
          initialRouteName="home"
        >
        <Stack.Screen name="home" component={home}/>
        <Stack.Screen name="details" component={details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


