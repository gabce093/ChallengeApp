import styles from '../styles/Page.style';
import SearchFriend from '../styles/SearchFriend.style.js';
import { Image, ImageBackground, Pressable, View, Text, TextInput, Dimensions, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import { setValues } from '../PlayerData';
import React, { useEffect, useState } from 'react';
//import { FriendSearchWindow } from './FriendSearchWindow';
import { ProgressBar } from 'react-native-paper';
import {getUsername, getLevel, getCoins, getGems, getPlayer} from '../PlayerData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';

/**
 * This function contains the functionality of the main page.
 * 
 * @author Henrik Gustafsson
 * @param navigation Uses navigation data keep track of what to diplay
 * @returns Itself as a component to be used by the navigation function in Index.
 */
export default function MainPageScreen({ navigation }: RootStackScreenProps<'CreateRunPage'>) {

  const [logSuccess, setLogSuccess] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [resUser, setUserName] = useState("");
  const [resPass, setPassWord] = useState("");
  const [resValue, setValue] = useState("");
  
  useEffect(() => {
    getData();  
  }, []);

  useEffect(() => {
    setUserName(getPlayer());  
  }, [resUser]);

const getData = async () => {
try {
const value = await AsyncStorage.getItem('@user_Key')

if(value != null) {
    console.log(`User:${value}  already logged in. `)
    setModalVisible(false);
    
   if(value) GetUserInfo(JSON.parse(value))

} else if(value == null) {
    setModalVisible(true);

}

} catch(e) {

}
}
const storeData = async (value:any) => {
    try {
      await AsyncStorage.setItem('@user_Key', JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  }
  const logOut = async () => {
    try {
      await AsyncStorage.setItem('@user_Key', "")
    } catch (e) {
      // saving error
    }
  }


const GetUserInfo = (resUser:string) => {
 
        fetch(`http://213.188.152.167:5000/users/${resUser}`)
   .then(data => {
       
   return data.json();
   })
   .then(user => {
       console.log(user[0])
       storeData(user[0].userName);
       setUserName(user[0].userName);
       setValues(JSON.stringify(user[0]));
   })
   if (resUser == "") return "error";
  //getData()
  
    
}


function AuthFunction(resUser:string, resPass:string){
   fetch('http://213.188.152.167:5000/users/login',

        {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                Accept:
                'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: `${resUser}`,
                lastName: `${resPass}`
            })

        })
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(data => { setLogSuccess(data) })
        
        logState(resUser)
      

}
 const logState = (resUser:string) => {
    console.log(logSuccess)
    

    if(logSuccess == true) {
       console.log("hehe")
       setModalVisible(false)
       GetUserInfo(resUser)
             
       //console.log(JSON.parse(retUserData)[0].firstName)

    }
    else if (logSuccess == false){
        return(<Text>Wrong Username or Password.</Text>);
    }
    else if(logSuccess == null) {
        return(<Text>User Data</Text>)
    }

}



  return (
      <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
    <View style={styles.screen}>
      
        <ImageBackground source={require('../Graphics/banan.png')} style={styles.banan} resizeMode="stretch">
      <View style={styles.topContainer}>
 
        <Image source={require('../Graphics/wut2w_kepps.png')} style={styles.playerImage} resizeMode="cover"></Image>
        <Text style={styles.username}>{resUser}</Text>
  

    </View>
        <View style={styles.bottomContainer}>
        <Text style={styles.WeeklyChaText}>Weekly Challenge Progress:</Text>
            <ProgressBar color="#43FF25" progress={0.7} style={{
                          height: "40%",
                          top: "-60%",
                          backgroundColor: "black",
                          borderRadius: 20,
                          width: 300,
                          zIndex: 10,
                          }}/>

            <Text style={styles.CurrentWeeklyChaText}>Current KMs / MaxKms</Text>  
          <Pressable style={styles.challengeButton} onPress={() => navigation.navigate('CreateRunPage')}>
              <Text style={styles.challengeText}>Challenge!</Text>
              </Pressable>         
              <View style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
        <Modal
            animationIn="slideInUp"
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
        >
            {/*<View style={SearchFriend.centeredView}>*/}
                <View style={SearchFriend.modalView}>
                    {/* Image of an "x" for tabbing out of the modal */}
                    <Pressable
                        onPress={() => setModalVisible(false)}
                        style={{
                            alignSelf: 'flex-end',
                            marginRight: '5%',
                        }}
                    >
                        <Image source={require('../assets/images/letter-x.png')}
                            style={{
                                width: '5%',
                                height: '5%',
                            }}
                        />
                    </Pressable>
                    <Text style={SearchFriend.modalText}>Enter Username and password</Text>
                    {/* Input to write tha name of the friend */}
                    <TextInput style={SearchFriend.textWindow} onChangeText={(text) => { setUserName(text) }} placeholder='Username' />
                    <TextInput style={SearchFriend.textWindow} onChangeText={(text) => { setPassWord(text) }} placeholder='Password' />
                    {/* Pressable to submit your search */}
                    <Pressable
                        style={[SearchFriend.button, SearchFriend.buttonSubmit]}
                        onPress={(user) => //AuthFunction(resUser,resPass)
                                AuthFunction(resUser, resPass)                             
                        }
                    ><Text style={{ color: 'white' }}>Enter</Text>                    
                    </Pressable>                   
                </View> 
        </Modal>        
        <Pressable
            style={[SearchFriend.button, SearchFriend.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={SearchFriend.textStyle}>Log in</Text>
        </Pressable>
        <Pressable
            style={[SearchFriend.button, SearchFriend.buttonOpen]}
            onPress={() => logOut()}
        >
            <Text style={SearchFriend.textStyle}>Log out</Text>
        </Pressable>  
    </View>
         
        </View>
        </ImageBackground>
    </View>
    </ImageBackground>
    
  );
}

