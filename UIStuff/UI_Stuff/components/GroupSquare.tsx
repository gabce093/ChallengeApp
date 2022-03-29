import friendPageStyles from '../styles/FriendPage.style';
import { Image, TouchableOpacity, Text, View, Pressable } from 'react-native';

/** 
@param lvl The lvl of the group
@returns The groupsquate name of the group, icon and the challengebutton
@category Friendpage
*/
export default function GroupSquare(level: string, name: string) {

    //Pressable friend square that makes the modal pop up
    return (
        <TouchableOpacity style={friendPageStyles.groupHolder} onPress={() => console.log('icon square pressed')} >
            <View style={friendPageStyles.groupIconHolder}>
                <View style={friendPageStyles.groupLvlBadge}>

                    {/* Text dispalying the level */}
                    <Text style={friendPageStyles.lvlText}>{level}</Text></View>

                {/* user icon for the friend */}
                <Image source={require('../assets/images/emptyPlayerIcon.png')} style={{
                    width: 110,
                    height: 110,
                    borderRadius: 100,
                    borderWidth: 4,
                    borderColor: "#766449",
                }}
                />
            </View>
            <View style={{ marginTop: 4, backgroundColor: 'transparent', alignItems: 'center' }}>
                {/* Show name of your friend */}
                <Text style={[friendPageStyles.nameText]}>{name}</Text>

                {/* Button to challenge your friend */}
                <Pressable style={friendPageStyles.groupChallengeButton} onPress={() => console.log('Pressed Challenge button')}>
                    <Text style={friendPageStyles.challengeTxt}>Challenge!</Text>
                </Pressable>
            </View>
        </TouchableOpacity>
    );
}