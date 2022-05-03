//React
import { View, Pressable, Text, TouchableOpacity, Image } from 'react-native';
//Styles
import inboxStyles from '../styles/Inbox.style';
//Components
import UserIcon from './UserIconLarge';
//playerData
import { calculateLevel } from '../PlayerData';
/**
 * Creates Frinedrequest card where the user can dcline or accept friend-requests
 * @param item The array item to rendered in the list
 * @param onAccept Functions executed when the acceptnutton is pressed
 * @param onDecline Functions executed when the declinetnutton is pressed
 * @param selectedId The id of the item to be updated with the texts "declined" or "updated"
 * @param acceptPressed Boolean that tells if the acceptbutton was pressed
 * @param acceptPressed Boolean that tells if the declinebutton was pressed
 * @returns Returns a Friendrequest card  with the ability of accepting and declining friendrequests
 * @category Inboxpage
 * @author Gabriel
 */

const renderFriendRequest = ({ item, onAccept, onDecline, selectedId, acceptPressed, declinePressed }:
    {
        item: any, onAccept: () => void, onDecline: () => void,
        selectedId: string, acceptPressed: boolean, declinePressed: boolean
    }) => {

    var status;
    if (acceptPressed && item.relationId == selectedId) {
        status = <Text style={{ color: 'white' }}>Accepted!</Text>
    }
    else if (declinePressed && item.relationId == selectedId) {
        status = <Text style={{ color: 'white' }}>Declined :(</Text>
    }
    else {
        status = <>
            <Pressable style={inboxStyles.acceptButton} onPress={onAccept}>
                <Image source={require('../assets/images/check.png')} style={{
                    width: '60%',
                    height: '60%',
                }} />
            </Pressable>
            <Pressable style={inboxStyles.declineButton} onPress={onDecline}>
                <Image source={require('../assets/images/cancel.png')} style={{
                    width: '60%',
                    height: '60%',
                }} />
            </Pressable>
        </>
    }

    return (
        <TouchableOpacity style={inboxStyles.friendRequestContainer}>
            <View style={inboxStyles.imageAndNameHolder}>
                <UserIcon level={calculateLevel(item.expAmount)} />
                <Text style={inboxStyles.messageFromText}>{item.userName}</Text>
            </View>

            <View style={inboxStyles.textAndButtonsHolder}>

                <View style={{ backgroundColor: '#383838' }}>
                    <Text style={inboxStyles.FriendRequestText}>Friend Request!</Text>
                </View>


                <View style={inboxStyles.statusButtonHolder}>
                    {status}
                </View>

            </View>
        </TouchableOpacity>

    );
};

export default renderFriendRequest;