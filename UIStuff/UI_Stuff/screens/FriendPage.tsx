import friendPageStyles from '../styles/FriendPage.style';
import styles from '../styles/Page.style';

import { ImageBackground, FlatList, Text, View, TextInput, Button, Pressable, RefreshControl } from 'react-native';
import { useState, useEffect, useCallback, Component } from 'react';
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

  //Address of the API that connect to the database
  const APIaddress = conn.API.adress + conn.API.port;

  //Changes the user in the AsyncStorage
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@user_Key', value)
    } catch (e) {
      // saving error
    }
  }
  //Removes a friend-relation form the database
  const removeFriend = (relationId: string) => {
    console.log(APIaddress + `/relation/remove/${relationId}`)
    Axios.delete(APIaddress + `/relation/remove/${relationId}`).then((response) => {
      console.log('Deleted!')
    })
  }

  //finds the friends of the user
  const searchFriends = (id: string) => {
    console.log("Logged in as: " + id)
    Axios.get(APIaddress + '/relations/' + id).then((response) => {
      setFriends(response.data);
    });
  };


  const [removeFriendVisible, setRemoveFriendVisible] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  //Function that gets fed into the flatlist and render the friend squares.
  /** 
  *@remarks Function that gets used in the flatlist to render the friend-list
  *@param item Object that contains information about a user
  *@param onLongPress Function that gets triggered by pressing the square
  *@returns The friendsquare with the name of the friend, icon and the challengebutton
  *@category Friendpage
  */
  const renderFriendSquare = ({ item }: { item: any }) => {

    //sets the id to be removed and enables the modal
    const enableRemove = (id: string) => {
      setSelectedId(id);
      setRemoveFriendVisible(true);
    }

    //Rmoves a user from the database and disables the modal
    const clickRemove = (removeId: string,) => {
      removeFriend(removeId);
      setRemoveFriendVisible(false);
    }

    //changes the color of the button in the modal-menu
    const colorOnPress = ({ pressed }: { pressed: boolean }) => [
      {
        backgroundColor: pressed
          ? 'rgb(255, 169, 99)'
          : 'white'
      }]

    return (
      <>
        {/*Renders the friendSquare, see: ../Components/FriendSquare */}
        <FriendSquare
          item={item}
          onLongPress={() => enableRemove(item.relation_id)}
        />
        {/* A modal with options for a specific friend. Triggered by a longpress on the friendsquare */}
        <Modal
          style={{
            margin: 0,

            justifyContent: 'flex-end',
          }}
          // customBackdrop={<View style={{ height: '100%' }} />}
          onModalHide={() => searchFriends(user)}
          animationIn="slideInUp"
          isVisible={removeFriendVisible}
          onBackdropPress={() => setRemoveFriendVisible(false)}
        >
          {/* The optins in the modal */}
          <View style={friendPageStyles.friendModal}>
            <Pressable onPress={() => clickRemove(selectedId)} style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
              <Text style={friendPageStyles.modalMenuText}>Remove from friends</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
              <Text style={friendPageStyles.modalMenuText}>View profile</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [colorOnPress({ pressed }), friendPageStyles.modalMenuButton]}>
              <Text style={friendPageStyles.modalMenuText}>Send challenge</Text>
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
        {/*Renders the GroupSquare, see: ../Components/GroupSquare */}
        <GroupSquare
          item={item}
          onLongPress={() => setRemoveGroupVisible(true)} />
        {/* A modal with options for a specific group. Triggered by a longpress on the GroupSquare */}
        <Modal
          style={{ flex: 1 }}
          animationIn="slideInUp"
          isVisible={removeGroupVisible}
          onBackdropPress={() => setRemoveGroupVisible(false)}
        >
          {/* The optins in the modal */}
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

  //Code to refresh the page
  const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    asyncAction();
    wait(1000).then(() => setRefreshing(false));
  }, []);

  //Function for retrieving the current user on load, needed for displaying the users friends. Used for refresh
  const asyncAction = async () => {
    try {
      //Retrievs user form AsyncStorage
      const value = await AsyncStorage.getItem('@user_Key')
      if (value !== null) {
        setUser(value);
        searchFriends(value);

      }
    } catch (e) {
      setIsError(true);
      console.log(e)
    }
  }

  //Calls on load
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

        {/* Modal for searching for and adding friends */}
        {FriendSearchWindow(user)}

        {/* Textinput used in development to change user */}
        <TextInput placeholder='Id of user...' onChangeText={(text) => setUser(text)} onSubmitEditing={() => storeData(user)} />

        <Text style={styles.title} > Friends</Text>
        <View style={friendPageStyles.friendContainer}>
          {/* List of all the friends */}
          <FlatList
            refreshControl={<RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
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