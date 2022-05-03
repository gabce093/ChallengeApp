//React
import { View, Image, Text } from 'react-native'
//Styles
import friendPageStyles from '../styles/FriendPage.style'
/** 
*A large circular image with a level used for displaying the group-image
* 
*@param level - The level underneath the image 
*@returns  A circular image of with a level-badge underneath it. 
*@category Friendpage
*@author Gabriel
*/
const userIconSmall = ({ level }: { level: number }) => {
    return (
        <View style={friendPageStyles.friendIconHolder}>
            <View style={friendPageStyles.lvlBadge}>

                {/* Text dispalying the level */}
                <Text style={friendPageStyles.FriendlvlText}>lvl {level}</Text>
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
    );

}
export default userIconSmall;