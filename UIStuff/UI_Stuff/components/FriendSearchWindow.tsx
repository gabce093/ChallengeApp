
import { Pressable, TextInput, Image, Text, View } from 'react-native';
import SearchFriend from '../styles/SearchFriend.style.js';
import { useState } from 'react';
import Modal from "react-native-modal";
import useEffect from "../components/dbTest"
import fetchData from "../components/dbTest"
import GetUserlist from "../components/dbTest"
import fetchTableData from "../components/dbTest"



export function FriendSearchWindow()  {
    
  

    const [modalVisible, setModalVisible] = useState(false);
    const [friendSearch, setFriendSearch] = useState("");
   //const users =  fetchTableData();
    //console.log(users);
   
 
    
    
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
                        
                       <TextInput style={SearchFriend.textWindow} onChangeText={setFriendSearch} value={friendSearch} placeholder='Type name...'/>
                        <Pressable
                            style={[SearchFriend.button, SearchFriend.buttonSubmit]}
                            onPress={(user) => console.log('Challenge button pressed')}
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