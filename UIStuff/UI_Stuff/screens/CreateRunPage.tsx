import styles from '../styles/Page.style';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React from 'react';
import { Button } from 'react-native';

export default function CreateRunPage({ navigation }: RootStackScreenProps<'GPSPage'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Run Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="/screens/CreateRunPage.tsx" >*/}

      <Button
        title= "Challenge"
        onPress={() => navigation.navigate('GPSPage')}
      />   

    </View>
  );
}