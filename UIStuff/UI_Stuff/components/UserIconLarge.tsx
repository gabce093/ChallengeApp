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
const userIconLarge = ({ level }: { level: string }) => {
    return (
        <View style={friendPageStyles.groupIconHolder}>
            <View style={friendPageStyles.groupLvlBadge}>

                {/* Text dispalying the level */}
                <Text style={friendPageStyles.GrouplvlText}>lvl {level}</Text>
            </View>

            {/* user icon for the friend */}
            <Image source={require('../assets/images/emptyPlayerIcon.png')} style={{
                width: 107,
                height: 107,
                borderRadius: 100,
                borderWidth: 7,
                borderColor: "#212121",
            }}
            />
        </View>
    );

}
export default userIconLarge;