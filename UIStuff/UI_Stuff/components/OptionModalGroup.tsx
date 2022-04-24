//React
import { Pressable, Text, View, } from 'react-native';
//Styles
import friendPageStyles from '../styles/FriendPage.style';
//Additional libraries
import Modal from "react-native-modal";
/**
 * Creates a menu that is activated when longpressing a GroupSquare. The menu has three options:
 * "Leave Group", "View Group Members" and "Send Challenge"
 * @param selectedId The id of the Group that was pressed
 * @param onModalHide A function that is triggered when the modal gets hidden away
 * @param isVisible Boolean that activates the modal
 * @param onBackdropPress A function that is triggered the user clicks on the backdrop
 * @returns Returns the option-menu when longpressing the GroupSquare
 * @category FriendPage
 */
const OptionModalGroup = ({ selectedId, onModalHide, isVisible, onBackdropPress }:
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
            <Pressable onPress={() => [onBackdropPress()]}//Leave group function here
                style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
                <Text style={friendPageStyles.modalMenuText}>Leave Group</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
                <Text style={friendPageStyles.modalMenuText}>View group members</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
                <Text style={friendPageStyles.modalMenuText}>Send challenge</Text>
            </Pressable>
        </View>
    </Modal>)

}
export default OptionModalGroup;