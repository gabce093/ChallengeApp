//React
import { View, Pressable, Text, TouchableOpacity, Image } from 'react-native';
//Styles
import inboxStyles from '../styles/Inbox.style';
//Componentes
import UserIcon from './UserIconLarge';
//playerData
import { calculateLevel } from '../PlayerData';

/**
 * Creates Challenge-info card the renders different things depending of the status of the challenge
 * 
 * @param item The array item to be rendered in the list
 * @returns Returns a Challnenge-info card  
 * @category Inboxpage
 * @author Gabriel
 */
const InfoChallengeCard = ({ item, onPress, selectedId, pressed }:
    {
        item: any, onPress?: () => void,
        selectedId?: string, pressed?: boolean
    }) => {
    var button;
    var text;
    if (item.status == 1) {
        button =
            <Pressable onPress={onPress} style={inboxStyles.acceptChallengeButton}>
                <Text style={inboxStyles.acceptChallengeButtonText}> Ok </Text>
            </Pressable>;
        text = item.userName + " completed your Challenge";
    }
    else if (item.status == 2) {
        text = "Challenge in progress";
    }

    return (
        <TouchableOpacity style={inboxStyles.friendRequestContainer}>
            <View style={inboxStyles.imageAndNameHolder}>
                <UserIcon level={calculateLevel(item.expAmount)} />
                <Text style={inboxStyles.messageFromText}>{item.userName}</Text>
            </View>

            <View style={inboxStyles.textAndButtonsHolder}>
                <View style={{ backgroundColor: '#383838', flex: 1 / 3, }}>
                    <Text style={[inboxStyles.ChallengeText, { fontSize: 27 }]}>{text}</Text>
                </View>
                <View style={inboxStyles.challengeInfoHolder}>
                    <View style={inboxStyles.infoBubbles}>
                        <Text style={inboxStyles.challengeInfoText}>{item.distance / 1000} km</Text>
                    </View>
                    <View style={inboxStyles.infoBubbles}>
                        <Text style={inboxStyles.challengeInfoText}> -min</Text>
                    </View>
                </View>
                {button}
            </View>
        </TouchableOpacity >

    );
};

export default InfoChallengeCard;