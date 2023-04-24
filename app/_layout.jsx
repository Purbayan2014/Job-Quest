import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

// when the app is loading this is going to make the splash screen visible
SplashScreen.preventAutoHideAsync();

export default Layout = () => {

    // 

    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
      });
    

    //   only show the home screen if the fonts have been loaded
      const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
      }, [fontsLoaded])

      // if the fonts are not getting loaded then return null
      if(!fontsLoaded) {
        return null;
      }
    
      return <Stack onLayout={onLayoutRootView}/>;
}
 