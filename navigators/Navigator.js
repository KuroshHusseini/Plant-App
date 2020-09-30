/* eslint-disable max-len */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Single from "../views/Single";
import Login from "../views/Login";
import { AuthContext } from "../contexts/AuthContext";
import Upload from "../views/Upload";
import MyFiles from "../views/MyFiles";
import Modify from "../views/Modify";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { StyleProvider } from "native-base";
import material from "../theme/variables/material";
import getTheme from "../theme/components";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      shifting
      activeColor="#228b22"
      inactiveColor="gray"
      barStyle={{
        borderColor: "#38733C",
        backgroundColor: "#b8f4b8",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => (
            <Ionicons
              backgroundColor="#b8f4b8"
              name="ios-home"
              size={24}
              color="black"
            />
          ),
          tabBarColor: "#4DC955",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => (
            <AntDesign name="profile" size={24} color="black" />
          ),
          tabBarColor: "#34BA96",
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: () => <Entypo name="upload" size={24} color="black" />,
          tabBarColor: "#9ACD32",
        }}
      />
    </Tab.Navigator>
  );
};

const StackScreen = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Home"
            component={TabScreen}
            options={{
              headerPressColorAndroid: "#b8f4b8",
              headerStyle: {
                backgroundColor: "#b8f4b8",
              },
            }}
          />
          <Stack.Screen
            name="Single"
            component={Single}
            options={{
              headerPressColorAndroid: "#b8f4b8",
              headerStyle: {
                backgroundColor: "#4DC955",
              },
            }}
          />
          <Stack.Screen
            name="MyFiles"
            component={MyFiles}
            options={{
              headerPressColorAndroid: "#b8f4b8",
              headerStyle: {
                backgroundColor: "#FB8B24",
              },
            }}
          />
          <Stack.Screen
            name="Modify"
            component={Modify}
            options={{
              headerPressColorAndroid: "#b8f4b8",
              headerStyle: {
                backgroundColor: "#34BA96",
              },
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </StyleProvider>
  );
};

export default Navigator;
