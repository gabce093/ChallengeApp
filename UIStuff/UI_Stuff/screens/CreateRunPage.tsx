import styles from '../styles/Page.style';
import { Button } from 'react-native';
import {addCoin, addGem, addEXP} from '../PlayerData';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CreateRunPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FuskSidan</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="/screens/CreateRunPage.tsx" >*/}
      <View style={styles.flipperContainer}>
      <Button
      onPress={() => addCoin()}
      title="Adda Coin"
      color="#ab309f"
      />
      <Button
      onPress={() => addGem()}
      title="Adda Gem"
      color="#ed5e0e"
      />
      <Button
      onPress={() => addEXP()}
      title="Adda EXP"
      color="#fcba03"
      />
      </View>
    </View>
  );
}