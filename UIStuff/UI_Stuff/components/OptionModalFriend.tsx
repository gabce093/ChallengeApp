//React
import { Pressable, Text, View, } from 'react-native';
//Styles
import friendPageStyles from '../styles/FriendPage.style';
//Additional libraries
import Modal from "react-native-modal";
//API requests
import { removeFriend } from "../API/FriendPage/requestsFriendPage"

/**
 * Creates a menu that is activated when longpressing a FriendSquare. The menu has three options:
 * "Remove Friend", "View Profile" and "Send Challenge"
 * @param selectedId The id of the friend that was pressed
 * @param onModalHide A function that is triggered when the modal gets hidden away
 * @param isVisible Boolean that activates the modal
 * @param onBackdropPress A function that is triggered the user clicks on the backdrop
 * @returns Returns the option-menu when longpressing the friendSquare
 * @category Friendpage
 * @author Gabriel
 */
const OptionModalFriend = ({ selectedId, onModalHide, isVisible, onBackdropPress }:
    { selectedId: string, onModalHide: () => void, isVisible: boolean, onBackdropPress: () => void }) => {
    //changes the color of the button in the modal-menu
    const colorOnPress = ({ pressed }: { pressed: boolean }) => [
        {
            backgroundColor: pressed
                ? 'rgb(255, 169, 99)'
                : 'white'
        }]

    return (<Modal
        style={{
            margin: 0,

            justifyContent: 'flex-end',
        }}
        onModalHide={onModalHide}
        animationIn="slideInUp"
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
    >
        {/* The optins in the modal */}
        <View style={friendPageStyles.friendModal}>
            <Pressable onPress={() => [removeFriend(selectedId), onBackdropPress()]}
                style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
                <Text style={friendPageStyles.modalMenuText}>Remove from Friends</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
                <Text style={friendPageStyles.modalMenuText}>View Profile</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
                <Text style={friendPageStyles.modalMenuText}>Send Challenge</Text>
            </Pressable>
        </View>
    </Modal>)

}
export default OptionModalFriend;