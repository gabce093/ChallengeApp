import friendPageStyles from '../styles/FriendPage.style';
import { Image, TouchableOpacity, Text, View, Pressable } from 'react-native';
import Modal from "react-native-modal";
import { useState, useContext } from 'react';

/** 
* @remarks This function returnsa a Square displaying a certain group.
* It it is used with a flatlist to render a list of groups.
* It was created to be on the friendpage.
* 
*@param lvl The lvl of the group
*@param name The name of the group
*@returns The groupsquare with the name of the group, icon and the challengebutton
*@category Friendpage
*/


const GroupSquare = ({ item, onLongPress }: { item: any, onLongPress: any }) => (

    <>
        <TouchableOpacity style={friendPageStyles.groupHolder} onLongPress={onLongPress} >
            <View style={friendPageStyles.groupIconHolder}>
                <View style={friendPageStyles.groupLvlBadge}>

                    {/* Text dispalying the level */}
                    <Text style={friendPageStyles.lvlText}>{item.level}</Text></View>

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
                <Text style={[friendPageStyles.nameText]}>{item.title}</Text>

                {/* Button to challenge your friend */}
                <Pressable style={friendPageStyles.groupChallengeButton} onPress={() => console.log('Pressed Challenge button')}>
                    <Text style={friendPageStyles.challengeTxt}>Challenge!</Text>
                </Pressable>
            </View>
        </TouchableOpacity>

    </>
)


export default GroupSquare;