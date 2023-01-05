import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, Dimensions } from 'react-native';
import ChatIcon from '../components/icons/ChatIcon';
import DiscoverIcon from '../components/icons/DiscoverIcon';
import NearByIcon from '../components/icons/NearByIcon';
import RingAllIcon from '../components/icons/RingAllIcon';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatA from '../screens/Individual/ChatA';
import Chat from '../screens/Main/Chat';
import Discover from '../screens/Main/Discover';
import NearBy from '../screens/Main/NearBy';
import Profile from '../screens/Main/Profile';
import RingAll from '../screens/Main/RingAll';
import TabOneScreen from '../screens/TabOneScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import tw from "twrnc";


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();
function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const screenHeight = Math.round(Dimensions.get('window').height);
  console.log(screenHeight)
  return (
    <BottomTab.Navigator
      initialRouteName='Discover'
      screenOptions={{
      tabBarStyle: { position: 'relative', minHeight: screenHeight>715?90:60, borderTopColor: '#D9D9D9', width: '100%', borderTopWidth: 0.2, paddingTop: 18, backgroundColor: '#fff' },
      tabBarActiveBackgroundColor: '#fff',
      tabBarInactiveBackgroundColor: '#fff',
      tabBarLabelStyle: {paddingBottom: 8, paddingTop: screenHeight>715?15:13, fontSize: 12, borderColor: 'unset', borderWidth: 0},
      tabBarActiveTintColor: '#2F80ED',
      tabBarInactiveTintColor: '#8D8E96',
     }}
     >
      <BottomTab.Screen
        name='Discover'
        component={Discover}
        options={{
          headerShown: false,
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <DiscoverIcon focused={focused} />
            ),
          }}
      />
      <BottomTab.Screen
        name='NearBy'
        component={NearBy}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <NearByIcon focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name='RingAll'
        component={RingAll}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <RingAllIcon focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Chats'
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <ChatIcon focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../assets/persons/person1.png')} style={tw`h-[29px] w-[29px] rounded-full border-[2px] border-[${focused ? '#2F80ED' : '#8D8E96'}]`} resizeMode="contain" />
          ),
        }}
      />
     
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
    <Stack.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{ headerShown: false }}
      />
    <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,     
        }}
      />
      <Stack.Screen
        name="ChatA"
        component={ChatA}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

