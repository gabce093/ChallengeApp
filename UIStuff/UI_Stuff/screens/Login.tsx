
import { Pressable, TextInput, Image, Text, View } from 'react-native';
import SearchFriend from '../styles/SearchFriend.style.js';
import React, { Component, useState, useEffect } from 'react';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setValues } from '../PlayerData';
import Navigation from '../navigation/index.js';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import { updateValues } from '../PlayerData';



export default function LoginPage() {

    useEffect(() => {
        logOut();
        getData();
    }, []);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@user_Key')

            if (value != null) {
                console.log(`User:${value}  already logged in. `)
                setModalVisible(false);

                if (value) GetUserInfo(JSON.parse(value))

            } else if (value == null) {
                setModalVisible(true);

            }

        } catch (e) {

        }
    }
    const storeData = async (username: any, id: string) => {
        try {
            await AsyncStorage.setItem('@user_Key', JSON.stringify(username))
            await AsyncStorage.setItem('@userID_Key', JSON.stringify(id))
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


    const GetUserInfo = (resUser: string) => {

        fetch(`http://213.188.152.167:5000/users/${resUser}`)
            .then(data => {

                return data.json();
            })
            .then(user => {
                console.log(user[0])
                storeData(user[0].userName, user[0].id)
                setValues(JSON.stringify(user[0]));
            })
        if (resUser == "") return "error";
        //getData()
    }


    function AuthFunction(resUser: string, resPass: string) {
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
    const logState = (resUser: string) => {
        console.log(logSuccess)


        if (logSuccess == true) {
            console.log("hehe")
            setModalVisible(false)
            GetUserInfo(resUser)



            //console.log(JSON.parse(retUserData)[0].firstName)

        }
        else if (logSuccess == false) {
            return (<Text>Wrong Username or Password.</Text>);
        }
        else if (logSuccess == null) {
            return (<Text>User Data</Text>)
        }

    }

    const [logSuccess, setLogSuccess] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [resUser, setUserName] = useState("");
    const [resPass, setPassWord] = useState("");
    const [resValue, setValue] = useState("");



    return <View style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
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

                        //navigation.navigate('MainPage')                              
                    }

                ><Text style={{ color: 'white' }}>Enter</Text>

                </Pressable>

            </View>

            {/* </View>*/}

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

}

