//React imports
import { Pressable, Image, Text, View } from 'react-native';
//Style
import SearchFriend from '../styles/SearchFriend.style.js';
//Additional libraries
import Modal from "react-native-modal";
/** 
* This fucntion opens a modal in which a the where the user confirms that if a challenge should
* be sent.
* 
*@param user Object that contains information about the group
*@returns A modal with a search list
*@category Friendpage
*/
const ConfirmMessage = ({ onBackdropPress, onNo, onYes, isVisible, question }:
    { onBackdropPress: () => void, onNo: () => void, onYes: () => void, isVisible: boolean, question: string }) => {

    return <>
        <Modal
            animationIn="slideInUp"
            isVisible={isVisible}
            onBackdropPress={onBackdropPress}
        >
            <View style={[SearchFriend.centeredView, { flex: 1 / 3 }]}>
                <View style={[SearchFriend.modalView, { height: 190 }]}>
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
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>{question}</Text>
                    <View style={{ flexDirection: 'row', alignContent: "space-around", marginTop: 20 }}>

                        <Pressable style={{
                            backgroundColor: "#383838", borderRadius: 8, justifyContent: 'center',
                            height: 50, width: 90, alignItems: 'center', marginRight: 80,
                        }} onPress={onNo}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >No.</Text>
                        </Pressable>

                        <Pressable style={{
                            backgroundColor: "#ff5c00", borderRadius: 8, justifyContent: 'center',
                            height: 50, width: 90, alignItems: 'center',
                        }} onPress={onYes}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Yes!</Text>
                        </Pressable >

                    </View>
                </View>
            </View>
        </Modal>
    </>
}
export default ConfirmMessage;