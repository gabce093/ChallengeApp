import pageStyles from '../styles/Page.style';
import statPageStyles from '../styles/StatPage.style';
import { ImageBackground} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

/**
 * This function contains the functionality of the base stat screen
 * 
 * @author Henrik Gustafsson
 * @returns The itself as a component to be used by the navigation function in Index.
 */
export default function StatPageScreen() {
  return (
    <ImageBackground source={require('../Graphics/forest.png')} style={pageStyles.forestBackground} resizeMode="cover">
      <View style={statPageStyles.MainContainer}>
            <View style={statPageStyles.row}>
              <MaterialCommunityIcons  name="medal" size={60} color={"gray"} />
              <Text style={statPageStyles.title}>Stat Page</Text>
              <MaterialCommunityIcons  name="medal" size={60} color={"gray"} />
            </View>
            <View style={statPageStyles.statHolder}>

              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Battles Won:</Text>
                <Text style={statPageStyles.statText}>null</Text>
              </View>

              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Avrage runtime:</Text>
                <Text style={statPageStyles.statText}>null Min</Text>
              </View>

              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Avrage length:</Text>
                <Text style={statPageStyles.statText}>null Kms</Text>
              </View>
              
              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Total kms:</Text>
                <Text style={statPageStyles.statText}>null Kms</Text>
              </View>

              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Total Steps:</Text>
                <Text style={statPageStyles.statText}>null</Text>
              </View>
          </View>
      </View>
    </ImageBackground>
  );
}