import styles from '../styles/Page.style';
import {addCoin, addGem, addEXP} from '../PlayerData';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React from 'react';
import { Button } from 'react-native';

export default function CreateRunPage({ navigation }: RootStackScreenProps<'GPSPage'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FuskSidan</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="/screens/CreateRunPage.tsx" >*/}
      <View style={styles.flipperContainer}>
      <Button
      onPress={() => addCoin(30)}
      title="Adda Coin"
      color="#ab309f"
      />
      <Button
      onPress={() => addGem(2)}
      title="Adda Gem"
      color="#ed5e0e"
      />
      <Button
      onPress={() => addEXP(500)}
      title="Adda EXP"
      color="#fcba03"
      />
      </View>

      <Button
        title= "Challenge"
        onPress={() => navigation.navigate('GPSPage')}
      />   

    </View>
  );
}