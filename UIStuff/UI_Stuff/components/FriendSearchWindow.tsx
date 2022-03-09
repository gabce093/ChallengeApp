import { Text, View } from './Themed';
import { Pressable,Alert, TextInput, Image } from 'react-native';
import SearchFriend from '../styles/SearchFriend.style.js';
import { useState } from 'react';
import SearchFriendStyle from '../styles/SearchFriend.style.js';
import Modal from "react-native-modal";

export function FriendSearchWindow() {
    const [modalVisible, setModalVisible] = useState(false);
    const [friendSearch, setFriendSearch] = useState("g");

    
    
    return <View style={{backgroundColor: 'rgba(0,0,0,0)'}}>
                <Modal
                animationIn="slideInUp"
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                >
                <View style={SearchFriend.centeredView}>
                    
                    <View style={SearchFriend.modalView}>
                    <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{ 
                            alignSelf: 'flex-end',
                            marginRight: '3vw',
                            }}
                        >
                        <Image source={require('../assets/images/letter-x.png')}
                             style={{ width: '4vw',
                             height: '4vw',
                             }}
                        />
                        </Pressable>
                        <Text style={SearchFriend.modalText}>Search for friend!</Text>

                       <TextInput style={SearchFriendStyle.textWindow} onChangeText={setFriendSearch} value={friendSearch} placeholder='Type name...'/>
                        <Pressable
                            style={[SearchFriend.button, SearchFriend.buttonClose]}
                            onPress={() => console.log(friendSearch)}
                        ><Text style={{ color: 'white'}}>Submit</Text>
                        </Pressable>
                        
                    </View>
                </View>
            </Modal>
                
            <Pressable
                style={[SearchFriend.button, SearchFriend.buttonOpen]}
                onPress={() => setModalVisible(true)}
                >
            <Text style={SearchFriend.textStyle}>Add friend!</Text>
            </Pressable>
        </View>
}