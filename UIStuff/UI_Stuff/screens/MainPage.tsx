import styles from '../styles/Page.style';

import React from 'react';
import { Button } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,} from '../components/Themed';
import  TopBar  from '../components/TopBar';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';


export default function MainPageScreen({ navigation }: RootStackScreenProps<'CreateRunPage'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Page</Text>
      
      {/*Än så länge gör de här bara en random text mitt på sidan*/ }
      <TopBar></TopBar>


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/*<EditScreenInfo path="/screens/MainPage.tsx" >*/}
      <Button
      onPress={() => navigation.navigate('CreateRunPage')}
      title="Start"
      color="#ed5c0e"
      />
    </View>
  );
}

