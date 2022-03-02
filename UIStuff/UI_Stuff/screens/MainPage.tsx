import styles from '../styles/Page.style';

import React from 'react';
import { Button } from 'react-native';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function MainPageScreen({ navigation }: RootTabScreenProps<'MainPage'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Page</Text>
      
      


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/*<EditScreenInfo path="/screens/MainPage.tsx" >*/}
      <Button
      onPress={() => console.log("text")}
      title="Start"
      color="#ed5c0e"
      />
    </View>
  );
}

