import * as React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AddPhoto!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function RegisterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Register!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackRoutes = () =>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Auth'>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Auth' component={Login} />
        <Stack.Screen name='Register' component={Register}/>
    </Stack.Navigator>


export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Feed'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'AddPhoto') {
                iconName = focused ? 'camera' : 'camera-outline';
              } 
              else if (route.name === 'Feed') {
                iconName = focused ? 'home' : 'home-outline';
              } 
              else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            
            tabBarActiveTintColor: '#159',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            headerShown:false,
          })}
        >
          <Tab.Screen name="AddPhoto" component={AddPhoto}  />
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Profile" component={StackRoutes} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }