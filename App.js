import React, { useState } from "react";
import { StatusBar } from "react-native";
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
import "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";
import AddTodoScreen from "./screens/AddTodoScreen";
import { AntDesign } from "@expo/vector-icons";
import Store from "./redux/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDark, setIsDark] = useState(false);

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
  return (
    <NavigationContainer theme={theme}>
      <Provider store={Store}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#e91e63",
            inactiveTintColor: "gray",
          }}
          initialRouteName="AddTodo"
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
            component={AddTodoScreen}
            options={{
              title: "Setting",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="setting" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
