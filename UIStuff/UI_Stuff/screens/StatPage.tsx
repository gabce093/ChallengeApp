import pageStyles from '../styles/Page.style';
import statPageStyles from '../styles/StatPage.style';
import { ImageBackground} from "react-native";

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function StatPageScreen() {
  return (
    <ImageBackground source={require('../Graphics/forest.png')} style={pageStyles.forestBackground} resizeMode="cover">
      <View style={statPageStyles.MainContainer}>
          <Text style={statPageStyles.title}>Stat Page</Text>
            <View style={statPageStyles.statHolder}>

              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Battles Won:</Text>
                <Text style={statPageStyles.statText}>null</Text>
              </View>

              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Avrage runtime:</Text>
                <Text style={statPageStyles.statText}>null</Text>
              </View>

              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Avrage length:</Text>
                <Text style={statPageStyles.statText}>null</Text>
              </View>
              
              <View style={statPageStyles.row}>
                <Text style={statPageStyles.statText}>Total kms:</Text>
                <Text style={statPageStyles.statText}>null</Text>
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
