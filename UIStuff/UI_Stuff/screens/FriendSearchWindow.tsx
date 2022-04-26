//React imports
import { Pressable, Image, Text, View } from 'react-native';
//Style
import SearchFriend from '../styles/SearchFriend.style.js';
//Components
import FriendSearchList from "../components/friendSearchList";
//Additional libraries
import Modal from "react-native-modal";

/** 
*  This fucntion opens a modal in which a the searchlist is displayed
* 
*@param user Object that contains information about the group
*@returns A modal with a search list
*@category Friendpage
*/
const FriendSearchWindow = ({ user, onBackdropPress, isVisible }:
    { user: string, onBackdropPress: () => void, isVisible: boolean }) => {

    return <>
        <Modal
            animationIn="slideInUp"
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
            //Empty the search when clicking down the modal
            onModalHide={() => user = ''}
        >
            <View style={SearchFriend.centeredView}>
                <View style={SearchFriend.modalView}>
                    {/* Image of an "x" for tabbing out of the modal */}
                    <Pressable
                        onPress={onBackdropPress}
                        style={{
                            alignSelf: 'flex-end',
                            marginRight: '3%',
                        }}
                    >
                        <Image source={require('../assets/images/letter-x.png')}
                            style={{
                                width: 25,
                                height: 25,
                                marginTop: 7,
                                opacity: 0.4,
                            }}
                        />
                    </Pressable>
                    <Text style={SearchFriend.modalText}>Search for a User...</Text>

                    {/* Sends in data from the fectch and renders it as a list(accordion) */}
                    <FriendSearchList user={user} />

                </View>
            </View>
        </Modal>
    </>
}
export default FriendSearchWindow;