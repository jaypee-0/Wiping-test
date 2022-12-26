import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Chat from '../screens/Main/Chat';
import Discover from '../screens/Main/Discover';
import NearBy from '../screens/Main/NearBy';
import Profile from '../screens/Main/Profile';
import RingAll from '../screens/Main/RingAll';
import TabOneScreen from '../screens/TabOneScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

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
  return (
    <BottomTab.Navigator
      initialRouteName='Discover'
      screenOptions={{
      tabBarStyle: { position: 'relative', height: 60, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderTopColor: '#D9D9D9', width: '100%', borderTopWidth: 0.2 },
      tabBarActiveBackgroundColor: '#fff',
      tabBarInactiveBackgroundColor: '#fff',
      tabBarLabelStyle: {paddingBottom: 10, fontSize: 12, borderColor: 'unset', borderWidth: 0},
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
            <Image source={require('../assets/TabIcons/chat.svg')} resizeMode="contain" />
            ),
          }}
      />
      <BottomTab.Screen
        name='NearBy'
        component={NearBy}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../assets/TabIcons/chat.svg')} resizeMode="contain" />
          ),
        }}
      />
      <BottomTab.Screen
        name='RingAll'
        component={RingAll}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../assets/TabIcons/chat.svg')} resizeMode="contain" />
          ),
        }}
      />
      <BottomTab.Screen
        name='Chats'
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../assets/TabIcons/chat.svg')} resizeMode="contain" />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../assets/TabIcons/chat.svg')} resizeMode="contain" />
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
          //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS ,       
        }}
      />
    </Stack.Navigator>
  );
}

