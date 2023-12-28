import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Details from "./screens/Details"
import { useCallback } from "react";
import BottomTabNavigation from "./navigations/BottomTabNavigation";
import Welcome from "./screens/login/Welcome";
import Login from "./screens/login/Login";
import Signup from "./screens/login/Signup";
import ScreenOdered from "./screens/TapOderScreen";



const stack = createStackNavigator()
export default function App() {

  const [fontsLoaded] = useFonts({
    black:require("./assets/fonts/Inter-Black.ttf"),
    bold:require("./assets/fonts/Inter-Bold.ttf"),
    regular:require("./assets/fonts/Inter-Regular.ttf"),
    medium:require("./assets/fonts/Inter-Medium.ttf"),
  })
  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null
  }
  return (
    // <NavigationContainer onReady={onLayoutRootView}>
    //   <stack.Navigator>
    //     <stack.Screen
    //       name="BottomTabNavigation"
    //       component={BottomTabNavigation}
    //       options={{
    //         headerShown:false
    //       }}
    //       />
    //     <stack.Screen 
    //       name="Details"
    //       component={Details}
    //       options={{
    //         headerShown:false
    //       }}
    //     />
    //   </stack.Navigator>

    // </NavigationContainer>





    <NavigationContainer>
    <stack.Navigator initialRouteName="Welcome">
      <stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login', headerShown: false }}
      />
      <stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: 'Signup', headerShown: false }}
      />
      
         <stack.Screen
         name="BottomTabNavigation"
          component={BottomTabNavigation}
         options={{
            headerShown:false
           }}
          />
        <stack.Screen 
          name="Details"
         component={Details}
          options={{
            headerShown:false
          }}
        />
        <stack.Screen 
          name="ScreenOrder"
         component={ScreenOdered}
          options={{
            headerShown:false
          }}
        />

    </stack.Navigator>
    
  
  </NavigationContainer>    
  )
}