import friendPageStyles from '../styles/FriendPage.style';
import styles from '../styles/Page.style';

import { ImageBackground, FlatList, Text, View, TextInput, Button, Pressable } from 'react-native';
import { useState, useEffect, Component } from 'react';
import FriendSquare from "../components/FriendSquare";
import GroupSquare from "../components/GroupSquare";
import { FriendSearchWindow } from './FriendSearchWindow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import Modal from "react-native-modal";

import conn from '../constants/databaseAPI';

const GROUPS = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Rullstol",
    level: 43,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Kandidat",
    level: 25,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Backstreet boys",
    level: 78,
  },

]

export default function FriendPageScreen() {

  const [user, setUser] = useState("");
  const [friends, setFriends] = useState([]);
  const [error, setIsError] = useState(false);

  const APIaddress = conn.API.adress + conn.API.port;

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@user_Key', value)
    } catch (e) {
      // saving error
    }
  }

  const removeFriend = (relationId: string) => {
    console.log(APIaddress + `/relation/remove/${relationId}`)
    Axios.delete(APIaddress + `/relation/remove/${relationId}`).then((response) => {
      console.log('Deleted!')
    })
  }

  const searchFriends = (id: string) => {
    console.log("Logged in as: " + id)
    Axios.get(APIaddress + '/relations/' + id).then((response) => {
      setFriends(response.data);
    });
  };

  //Function that gets fed into the flatlist and render the friend squares.
  const [removeFriendVisible, setRemoveFriendVisible] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const renderFriendSquare = ({ item }: { item: any }) => {
    const enableRemove = (id: string) => {
      setSelectedId(id);
      setRemoveFriendVisible(true);
    }

    const clickRemove = (id: string) => {
      removeFriend(id);
      setRemoveFriendVisible(false);
    }
    return (
      <>
        <FriendSquare
          item={item}
          onLongPress={() => enableRemove(item.relation_id)}
        />
        <Modal
          style={{ marginBottom: 0 }}
          animationIn="slideInUp"
          isVisible={removeFriendVisible}
          onBackdropPress={() => setRemoveFriendVisible(false)}
        >
          <View style={friendPageStyles.groupModal}>
            <Pressable onPress={() => clickRemove(selectedId)} style={{ backgroundColor: 'white' }}>
              <Text>Remove friend</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: 'white' }}>
              <Text>View profile!</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: 'white' }}>
              <Text>Send challenge</Text>
            </Pressable>
          </View>
        </Modal>
      </>
    );
  };

  //Renders the Group icons in the group container
  const [removeGroupVisible, setRemoveGroupVisible] = useState(false);
  const renderGroupSquare = ({ item }: { item: any }) => {
    return (
      <>
        <GroupSquare
          item={item}
          onLongPress={() => setRemoveGroupVisible(true)} />
        <Modal
          style={{ marginBottom: 0 }}
          animationIn="slideInUp"
          isVisible={removeGroupVisible}
          onBackdropPress={() => setRemoveGroupVisible(false)}
        >
          <View style={friendPageStyles.groupModal}>
            <Pressable style={{ backgroundColor: 'white' }}>
              <Text>Leave Group</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: 'white' }}>
              <Text>View members</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: 'white' }}>
              <Text>Send challenge</Text>
            </Pressable>
          </View>
        </Modal>
      </>
    )
  };

  //Function for retrieving the current user on load, needed for displaying the users friends
  const asyncAction = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_Key')
      if (value !== null) {
        setUser(value);
        searchFriends(value);

      }
    } catch (e) {
      setIsError(true);
    }
  }

  useEffect(() => {
    asyncAction();
  }, []);


  return (

    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={friendPageStyles.backimg} source={require('../assets/images/forest.png')}>

        { /*Group box*/}
        <Text style={styles.title} > Groups</Text>
        <View style={friendPageStyles.groupContainer}>
          {/* List of all the friends */}
          <FlatList
            nestedScrollEnabled
            data={GROUPS}
            renderItem={renderGroupSquare}
            horizontal={false}
            columnWrapperStyle={{ height: 220, }}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text>You currently haven't created a group</Text>}
            getItemLayout={(data, index) => (
              { length: 200, offset: 100 * index, index }
            )}

          />
        </View>

        {/* Modal for adding friends */}
        {FriendSearchWindow(user)}
        <TextInput placeholder='Name of user...' onChangeText={(text) => setUser(text)} onSubmitEditing={() => storeData(user)} />
        <Button title='Refresh' onPress={() => searchFriends(user)} />


        <Text style={styles.title} > Friends</Text>
        <View style={friendPageStyles.friendContainer}>

          {/* List of all the friends */}
          <FlatList
            nestedScrollEnabled
            data={friends}
            renderItem={renderFriendSquare}
            horizontal={false}
            columnWrapperStyle={{ height: 190, }}
            numColumns={3}
            extraData={selectedId}
            keyExtractor={(item) => item.user_id_1}
            ListEmptyComponent={<Text>You currently haven't added any friends</Text>}
            getItemLayout={(data, index) => (
              { length: 200, offset: 100 * index, index }
            )}

          />
        </View>
      </ImageBackground>
    </View>
  );
}