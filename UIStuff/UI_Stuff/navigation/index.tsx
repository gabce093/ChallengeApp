/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import TopBar from '../components/TopBar'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

// Base Screens:
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import StatPageScreen from '../screens/StatPage';
import ShoppingPageScreen from '../screens/ShoppingPage';
import MainPageScreen from '../screens/MainPage';
import ChallengePageScreen from '../screens/ChallengePage';
import FriendPageScreen from '../screens/FriendPage';

// Sub-Screens:
import CreateRunPage from '../screens/CreateRunPage';
import GPSPage from '../screens/GPSPage';



import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { RootStackScreenProps } from '../types';
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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();

// Root navigator is on all 5 main tabs, it includes the topbar
function RootNavigator() {
  return (
    <Stack.Navigator>
              
      <Stack.Screen name="Root" component={BottomTabNavigator}  options=
      {({navigation}) => ({
        headerShown: true,
        headerTransparent: true,
        header: () => <TopBar {...navigation}/>
         
      })} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
        <Stack.Screen name="CreateRunPage" component={CreateRunPage} />
        <Stack.Screen name="GPSPage" component={GPSPage} />
    </Stack.Navigator>
  );
}

// BottomTabNavigator contains the 5 buttons at the bottom of the screen
function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        
      }}>
        
      <BottomTab.Screen
        name="StatPage"
        component={StatPageScreen}
        options={{
          title: 'Stat Page',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons  name="medal" size={30} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="ShoppingPage"
        component={ShoppingPageScreen}
        options={{
          title: 'Shopping Page',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="shopping-cart" size={28} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="MainPage"
        component={MainPageScreen}
        options={({ navigation }: RootTabScreenProps<'MainPage'>) => ({
          title: 'Main Page',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="sword-cross" size={30} color={color} />,
          /*
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
            
          ),
          */
        })}
      />
      
      <BottomTab.Screen
        name="ChallengePage"
        component={ChallengePageScreen}
        options={{
          title: 'Challenge Page',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="mail" size={30} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="FriendPage"
        component={FriendPageScreen}
        options={{
          title: 'Friend Page',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-friends" size={24} color={color} />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
