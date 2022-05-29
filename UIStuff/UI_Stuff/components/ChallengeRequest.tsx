//React
import { View, Pressable, Text, TouchableOpacity, Image } from 'react-native';
//Styles
import inboxStyles from '../styles/Inbox.style';
//Componentes
import UserIcon from './UserIconLarge';
//playerData
import { calculateLevel } from '../PlayerData';

/**
 * Creates Challenge-request card where the user can decline or accept a challenge-requests
 * @param item The array item to be rendered in the list
 * @param onAccept Functions executed when the acceptbutton is pressed
 * @param selectedId The id of the item to be updated with the texts "declined" or "updated"
 * @param acceptPressed Boolean that tells if the acceptbutton was pressed
 * @returns Returns a Challnengerequest card  with the ability of accepting and declining challengerequests
 * @category Inboxpage
 * @author Gabriel
 */
const renderChallengeRequest = ({ item, onAccept, selectedId, acceptPressed, onDeny }:
    { item: any, onAccept: () => void, selectedId: string, acceptPressed: boolean, onDeny: () => void, }) => {
    var status: JSX.Element;
    if (acceptPressed && item.relationId == selectedId) {
        status = <Text style={{ color: 'white' }}>Accepted!</Text>
    }
    else {
        status = <>
            <Pressable style={inboxStyles.acceptChallengeButton} onPress={onAccept}>
                <Text style={inboxStyles.acceptChallengeButtonText}>Accept!</Text>
            </Pressable>
        </>
    }
    return (
        <>
            <Pressable onPress={onDeny} style={{ position: "absolute", alignSelf: "flex-end", zIndex: 3, paddingRight: "8%", paddingTop: "10%", elevation: 3, }}>
                <Image source={require('../assets/images/cancel.png')}
                    style={{ alignSelf: "flex-end", height: 30, width: 30, position: "relative" }}>
                </Image>
            </Pressable>
            <TouchableOpacity style={[inboxStyles.friendRequestContainer, { position: "relative", zIndex: 1 }]}>
                <View style={inboxStyles.imageAndNameHolder}>
                    <UserIcon level={calculateLevel(item.expAmount)} />
                    <Text style={inboxStyles.messageFromText}>{item.userName}</Text>
                </View>

                <View style={[inboxStyles.textAndButtonsHolder, { position: "relative", zIndex: 1 }]}>

                    <View style={{ backgroundColor: '#383838', flex: 1 / 3, }}>
                        <Text style={inboxStyles.ChallengeText}>Challenge!</Text>
                    </View>
                    <View style={inboxStyles.challengeInfoHolder}>
                        <View style={inboxStyles.infoBubbles}>
                            <Text style={inboxStyles.challengeInfoText}>{item.distance / 1000} km</Text>
                        </View>
                        <View style={inboxStyles.infoBubbles}>
                            <Text style={inboxStyles.challengeInfoText}> -min</Text>
                        </View>
                    </View>
                    <View style={inboxStyles.statusButtonHolder} >
                        {status}
                    </View>

                </View>
            </TouchableOpacity >
        </>
    );
};

export default renderChallengeRequest;