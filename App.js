import React, { useState , useEffect } from "react";
import { StatusBar , ActivityIndicator , View  } from "react-native";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";
import AddTodoScreen from "./screens/AddTodoScreen";
import { AntDesign } from "@expo/vector-icons";
import Store from "./redux/store";
import { Provider } from "react-redux";
import DetailScreen from "./screens/DetailScreen";
import EditScreen from "./screens/EditScreen";
import SettingScreen from "./screens/SettingScreen";
import {useFonts} from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabNavigation = (props) => {
  const {themeToggle , theme} = props;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#e91e63",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AddTodo"
        component={AddTodoScreen}
        options={{
          title: "Add",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen

        name="Setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      >
        {props=><SettingScreen themeToggle={themeToggle} theme={theme} {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};


export default function App() {
  const [isDark, setIsDark] = useState(false);
  let [fontsLoaded] = useFonts({
    'iran-sans': require('./assets/fonts/IRANSansMobile.ttf'),
    'b-yekan' : require('./assets/fonts/BYekan.ttf')
  });

  const themeToggle =async ()=>{
    setIsDark(!isDark);
   
  }

  const darkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    background: "#333",
    color: "#fff",
  };
  const defaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    background: "#fff",
    color: "#333",
  };

  const theme = isDark ? darkTheme : defaultTheme;
  if (!fontsLoaded) {
    return(
      <View style={{flex :1 , justifyContent:'center' , alignItems:'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    ) 
  }else{
    return (
      <NavigationContainer theme={theme}>
      <Provider store={Store}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Stack.Navigator 
          screenOptions={{
            headerShown : false,
          }}
        >
          <Stack.Screen name="Home">
            {
              props=><MyTabNavigation theme={isDark} themeToggle={themeToggle}  {...props}/>
            }
          </Stack.Screen>
          <Stack.Screen name="Detail" component={DetailScreen}/>
          <Stack.Screen name="Edit" component={EditScreen}/>

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    );
    }
  }
