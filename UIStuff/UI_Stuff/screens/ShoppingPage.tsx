import styles from '../styles/Page.style';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ShoppingPageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ShoppingPage.tsx" />
    </View>
  );
}
