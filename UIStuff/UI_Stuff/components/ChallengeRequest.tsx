//React
import { View, Pressable, Text, TouchableOpacity, Image } from 'react-native';
//Styles
import inboxStyles from '../styles/Inbox.style';
//Componentes
import UserIcon from './UserIconLarge';

/**
 * Creates Frinedrequest card where the user can dcline or accept friend-requests
 * @param item The array item to rendered in the list
 * @param onAccept Functions executed when the acceptnutton is pressed
 * @param onDecline Functions executed when the declinetnutton is pressed
 * @param selectedId The id of the item to be updated with the texts "declined" or "updated"
 * @param acceptPressed Boolean that tells if the acceptbutton was pressed
 * @param acceptPressed Boolean that tells if the declinebutton was pressed
 * @returns Returns a Friendrequest card  with the ability of accepting and declining friendrequests
 */
const renderChallengeRequest = ({ item, onAccept, selectedId, acceptPressed }:
    { item: any, onAccept: () => void, selectedId: string, acceptPressed: boolean }) => {
    var status;
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
        <TouchableOpacity style={inboxStyles.friendRequestContainer}>
            <View style={inboxStyles.imageAndNameHolder}>
                <UserIcon level={item.expAmount} />
                <Text style={inboxStyles.messageFromText}>{item.userName}</Text>
            </View>

            <View style={inboxStyles.textAndButtonsHolder}>

                <View style={{ backgroundColor: '#383838', flex: 1 / 3, }}>
                    <Text style={inboxStyles.messageHeadText}>Challenge!</Text>
                </View>
                <View style={inboxStyles.challengeDistanceHolder}>
                    <View style={{ backgroundColor: '#383838', borderRadius: 8, }}>
                        <Text style={inboxStyles.challengeDistanceText}>{item.distance} km</Text>
                    </View>
                </View>
                <View style={inboxStyles.statusButtonHolder} >
                    {status}
                </View>

            </View>
        </TouchableOpacity>

    );
};

export default renderChallengeRequest;