//React
import { TouchableOpacity, Text, View, Pressable } from 'react-native';
//Styles
import friendPageStyles from '../styles/FriendPage.style';
//Components
import UserIcon from './UserIconLarge'
/** 
* This function creats a Square displaying a certain group.
*
* It uses the function <userIconLarge> for the image.
* It it is used with a flatlist to render a list of groups.
* It was created to be on the friendpage.
* 
*@param item - Object that contains information about the group
*
*@param onLongPress - Function that gets triggered by pressing the square
*
*@returns The groupsquare with the name of the group, icon and the challengebutton
*@category Friendpage
*@author Gabriel
*/
const GroupSquare = ({ item, onLongPress }: { item: any, onLongPress: () => void }) => (
    <>
        <TouchableOpacity style={friendPageStyles.groupHolder} onLongPress={onLongPress} >
            <UserIcon level={item.level} />
            <View style={{ backgroundColor: 'transparent', alignItems: 'center' }}>
                {/* Show name of your friend */}
                <Text style={friendPageStyles.groupNameText}>{item.title}</Text>

                {/* Button to challenge your friend */}
                <Pressable style={friendPageStyles.groupChallengeButton} onPress={() => console.log('Pressed Challenge button')}>
                    <Text style={friendPageStyles.groupChallengeButtonTxt}>Challenge!</Text>
                </Pressable>
            </View>
        </TouchableOpacity>
    </>
)
export default GroupSquare;