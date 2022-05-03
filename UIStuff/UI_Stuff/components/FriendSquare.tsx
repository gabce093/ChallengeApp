//React
import { Image, TouchableOpacity, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
//Styles
import friendPageStyles from '../styles/FriendPage.style';
//Components
import ConfirmMessage from './ConfirmMessage';
import { setChallenger, setChallengerId } from '../ChallengeData';
import { calculateLevel } from '../PlayerData';

/** 
* @remarks This function returnsa a Square displaying a certain friend.
* It it is used with a flatlist to render a list of friends.
* It was created to be on the friendpage.
* 
*@param item Object that contains information about a user
*@param onLongPress Function that gets triggered by pressing the square
*@returns The friendsquare with the name of the friend, icon and the challengebutton
*@category Friendpage
*@author Gabriel
*/
const FriendSquare = ({ userObject, onLongPress, onPress }: { userObject: any, onLongPress?: () => void, onPress?: () => void }) => {
  //Pressable friend square that makes the modal pop up on a Long press
  const [confirmVisible, setConfirmVisible] = useState(false);
  return <TouchableOpacity style={friendPageStyles.friendHolder} onLongPress={onLongPress} onPress={onPress} >
    <View style={friendPageStyles.friendIconHolder}>
      <View style={friendPageStyles.lvlBadge}>

        {/* Text dispalying the level */}
        <Text style={friendPageStyles.FriendlvlText}>lvl {calculateLevel(userObject.expAmount)}</Text>
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
      <Text style={[friendPageStyles.nameText]}>{userObject.userName}</Text>

      {/* Button to challenge your friend */}
      <Pressable style={friendPageStyles.friendChallengeButton}
        onPress={() => [console.log('Pressed Challenge button'), setConfirmVisible(true)]}>
        <Text style={friendPageStyles.friendChallengeButtonTxt}>Challenge</Text>
      </Pressable>

      <ConfirmMessage
        isVisible={confirmVisible}
        onBackdropPress={() => setConfirmVisible(false)}
        onNo={() => setConfirmVisible(false)}
        onYes={() => {console.log("send challenge");
                      setChallenger();
                      setChallengerId(userObject.id)}
      }
        question={"Are you sure you want to challenge " + userObject.userName + "?"} />

    </View>

  </TouchableOpacity>
}
export default FriendSquare;