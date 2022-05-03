/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          MainPage: {
            screens: {
              MainPageScreen: 'one',
            },
          },
          ShoppingPage: {
            screens: {
              ShoppingPageScreen: 'two',
            },
          },
          ChallengePage: {
            screens: {
              ChallengePageScreen: 'three',
            },
          },
          StatPage: {
            screens: {
              StatPageScreen: 'four',
            },
          },
          FriendPage: {
            screens: {
              FriendPageScreen: 'five',
            },
          },
        },
      },
      ProfilePage: 'ProfilePage',
      ResultPage: 'ResultPage',
      GPSPage: 'GPSPage',
      CreateRunPage: 'CreateRunPage',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
