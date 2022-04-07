import friendPageStyles from '../styles/FriendPage.style';
import { Image, TouchableOpacity, Text, View, Pressable } from 'react-native';

/** 
* @remarks This function returnsa a Square displaying a certain friend.
* It it is used with a flatlist to render a list of friends.
* It was created to be on the fr.
* 
*@param lvl The lvl of the friend
*@param name The name of the friend
*@returns The friendsquare with the name of the friend, icon and the challengebutton
*@category Friendpage
*/
const FriendSquare = ({ item, onLongPress }: { item: any, onLongPress: any }) => (
  //Pressable friend square that makes the modal pop up


  <TouchableOpacity style={friendPageStyles.friendHolder} onLongPress={onLongPress} >
    <View style={friendPageStyles.friendIconHolder}>
      <View style={friendPageStyles.lvlBadge}>

        {/* Text dispalying the level */}
        <Text style={friendPageStyles.lvlText}>{item.xp}</Text>
      </View>

      {/* user icon for the friend */}
      <Image style={{
        width: 90,
        height: 90,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: "#766449"
      }}
        source={require('../assets/images/emptyPlayerIcon.png')}
      />
    </View>
    <View style={{ marginTop: 4, backgroundColor: 'transparent', alignItems: 'center' }}>
      {/* Show name of your friend */}
      <Text style={[friendPageStyles.nameText]}>{item.name}</Text>

      {/* Button to challenge your friend */}
      <Pressable style={friendPageStyles.friendChallengeButton} onPress={() => console.log('Pressed Challenge button')}>
        <Text style={friendPageStyles.challengeTxt}>Challenge</Text>
      </Pressable>
    </View>
  </TouchableOpacity>


)
export default FriendSquare;