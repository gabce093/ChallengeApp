
import { Pressable, TextInput, Image, Text, View, FlatList, } from 'react-native';
import SearchFriend from '../styles/SearchFriend.style.js';
import { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import friendSearchList from "../components/friendSearchList";

/** 
* @remarks This fucntion opens a modal in which a the searchlist is displayed
* 
*@param user Object that contains information about the group
*@returns A modal with a search list
*@category Friendpage
*/
export function FriendSearchWindow(user: string) {

    const [modalVisible, setModalVisible] = useState(false);
    const [friendSearch, setFriendSearch] = useState('');

    // Fetches the users from the database based on the parameter "text"

    return <View style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
        <Modal
            animationIn="slideInUp"
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
        // onModalHide={() => setData([])}
        >
            <View style={SearchFriend.centeredView}>
                <View style={SearchFriend.modalView}>
                    {/* Image of an "x" for tabbing out of the modal */}
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
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
                    <Text style={SearchFriend.modalText}>Search for friend!</Text>

                    {/* Sends in data from the fectch and renders it as a list(accordion) */}
                    {friendSearchList(user)}

                </View>
            </View>
        </Modal>

        <Pressable
            style={[SearchFriend.button, SearchFriend.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Image style={{ height: 30, width: 30, marginLeft: 3 }} source={require('../assets/images/add-user.png')} />
        </Pressable>
    </View>
}