import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';
import Login from '../views/Login';
import {AuthContext} from '../contexts/AuthContext';
import Upload from '../views/Upload';
import MyFiles from '../views/MyFiles';
import Modify from '../views/Modify';
import {AntDesign, Ionicons, Entypo} from '@expo/vector-icons';
import {StyleProvider} from 'native-base';
import material from '../theme/variables/material';
import getTheme from '../theme/components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
  return (
    <StyleProvider style = {getTheme(material)}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
          // eslint-disable-next-line react/display-name
            tabBarIcon: (props) => (
              <Ionicons
                backgroundColor="green"
                name="ios-home"
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
          // eslint-disable-next-line react/display-name
            tabBarIcon: (props) => (
              <AntDesign name="profile" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={Upload}
          options={{
          // eslint-disable-next-line react/display-name
            tabBarIcon: (props) => (
              <Entypo name="upload" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </StyleProvider>
  );
};

const StackScreen = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <StyleProvider style = {getTheme(material)}>
      <Stack.Navigator>
        {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={TabScreen} />
          <Stack.Screen name="Single" component={Single} />
          <Stack.Screen name="MyFiles" component={MyFiles} />
          <Stack.Screen name="Modify" component={Modify} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
      </Stack.Navigator>
    </StyleProvider>
  );
};

const Navigator = () => {
  return (
    <StyleProvider style = {getTheme(material)}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </StyleProvider>
  );
};

export default Navigator;
