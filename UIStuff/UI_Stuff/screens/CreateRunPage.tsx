import styles from '../styles/Page.style';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CreateRunPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Run Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="/screens/CreateRunPage.tsx" >*/}
    </View>
  );
}