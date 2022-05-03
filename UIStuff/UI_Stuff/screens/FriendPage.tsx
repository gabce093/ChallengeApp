//React imports
import { ImageBackground, FlatList, Text, View, TextInput, Button, Pressable, RefreshControl, Image } from 'react-native';
import { useState, useEffect, useCallback, } from 'react';
//Styles
import friendPageStyles from '../styles/FriendPage.style';
import SearchFriend from '../styles/SearchFriend.style.js';
import styles from '../styles/Page.style';
//Components
import FriendSquare from "../components/FriendSquare";
import GroupSquare from "../components/GroupSquare";
import FriendSearchWindow from './FriendSearchWindow';
import OptionModalFriend from '../components/OptionModalFriend';
import OptionModalGroup from '../components/OptionModalGroup';
import ErrorBanner from '../components/errorBanner';
//Additional libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
//API request
import { getFriends } from '../API/FriendPage/requestsFriendPage';
const GROUPS = [
  {
    groupId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Rullstol",
    level: 43,
  },
  {
    groupId: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Kandidat",
    level: 25,
  },
  {
    groupId: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Backstreet boys",
    level: 78,
  },
]

/**
 * This is the the apps friend page. It displays the users friend and groups. On it you can also clock up a modal
 * where you can search for new people and send them friend-requests. You can also remove friends by long pressing
 * the friend icon and then pressing "Remove from friends" on the modal-menu.
 *
 * @returns The entire FriendPage for the app
 * @category Friendpage
 */
export default function FriendPageScreen(page: any) {

  //Calls on load
  useEffect(() => {
    asyncAction();
  }, []);
  const [friends, setFriends] = useState([]);


  //FUNCTION: Changes the user in the AsyncStorage
  const [user, setUser] = useState("");
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@userID_Key', value)
    } catch (e) {
      // saving error
    }
  }

  //Code to refresh the page
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    asyncAction();
    wait(1000).then(() => setRefreshing(false));
  }, []);

  //FUNCTION: for retrieving the current user on load, needed for displaying the users friends. Also used for refresh
  const [connectionError, setConnectionError] = useState(false);
  const asyncAction = async () => {
    //Retrievs user form AsyncStorage
    const value = await AsyncStorage.getItem('@userID_Key');
    try {
      if (value !== null) {
        setUser(value)
        await getFriends(value)
          .then(data => {
            setFriends(data);
            setConnectionError(false)
          })
          .catch((error) => [console.log(error + ' when retrieving friends in FriendPage.tsx (asyncAction-function)')
            , setConnectionError(true)]
          )
      }
    } catch (e) {
      console.log(e)
    }
  }

  const [optionFriendVisible, setOptionFriendVisible] = useState(false);
  const [selectedIdFriend, setSelectedId] = useState('');

  //Here start the functions that actually renders elements on screen
  /** 
  *Function that gets used in the FlatList to render a list of friends. Each item consists of 
  *the FriendSquare and the menu activated when longpressing it.
  *@param item Object that contains information about a friend.
  *@returns The friendsquare with the name of the friend, icon and the challengebutton and the 
  *feature of longpressing for a option menu.
  *@category Friendpage
  */
  const renderFriendSquare = ({ item }: { item: any }) => {
    return (
      <>
        {/*Renders the friendSquare, see: ../Components/FriendSquare */}
        <FriendSquare
          userObject={item}
          onLongPress={() => [setSelectedId(item.relationId), setOptionFriendVisible(true)]}
          onPress={() => page.navigation.navigate('ProfilePage', item)}
        />
        {/* A modal with options for a specific friend. Triggered by a longpress on the friendsquare,
         see: ../Components/OptionModalFriend */}
        <OptionModalFriend
          selectedId={selectedIdFriend}
          isVisible={optionFriendVisible}
          onBackdropPress={() => setOptionFriendVisible(false)}
          onModalHide={() => getFriends(user)
            .then(data => { setFriends(data); })
            .catch((error) => [console.log(error + ' when deleting friend in FriendPage.tsx'),
            setConnectionError(true)])}
        />
      </>
    );
  };

  const [optionGroupVisible, setOptionGroupVisible] = useState(false);
  const [selectedIdGroup, setSelectedIdGroup] = useState('');
  /** 
  *Function that gets used in the FlatList to render a list of groups. Each item consists of 
  *the GroupSquare and the menu activated when longpressing it.
  *@param item Object that contains information about a group.
  *@returns The groupsquare with the name of the friend, icon and the challengebutton and the 
  *feature of longpressing for a option menu.
  *@category Friendpage
  */
  function renderGroupSquare({ item }: { item: any }) {
    return (
      <>
        {/*Renders the GroupSquare, see: ../Components/GroupSquare */}
        <GroupSquare
          item={item}
          onLongPress={() => [setSelectedIdGroup(item.groupId), setOptionGroupVisible(true)]} />
        {/* A modal with options for a specific group. Triggered by a longpress on the GroupSquare */}
        <OptionModalGroup selectedId={selectedIdGroup}
          isVisible={optionGroupVisible}
          onBackdropPress={() => setOptionGroupVisible(false)}
          onModalHide={() => console.log("search for groups")}
        />
      </>
    )
  };

  const [userSearchVisible, setUserSearchVisible] = useState(false);
  return (

    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={[styles.forestBackground,
      { justifyContent: 'flex-end', alignItems: 'center' }]} source={require('../assets/images/forest.png')}>
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
            keyExtractor={(item) => item.groupId}
            extraData={selectedIdGroup}
            ListEmptyComponent={<Text>You currently haven't created a group</Text>}
            getItemLayout={(data, index) => (
              { length: 200, offset: 100 * index, index }
            )}

          />
        </View>

        {/* Modal for searching for and adding friends */}
        <FriendSearchWindow user={user}
          isVisible={userSearchVisible}
          onBackdropPress={() => setUserSearchVisible(false)} />

        {/* Textinput used in development to change user */}
        <TextInput placeholder='Id of user...' onChangeText={(text) => setUser(text)} onSubmitEditing={() => storeData(user)} />

        <View style={{ height: "52%", width: "100%", alignItems: "center" }}>
          <Text style={[styles.title, { alignSelf: "center" }]} > Friends</Text>

          {/*Button for accessing the friendSearch  */}
          <View style={{
            alignItems: "center", justifyContent: "center", height: 70, width: 70
            , position: "absolute", zIndex: 2, alignSelf: "flex-end"
          }}>
            {/*Button that activates the modal for searching for users*/}
            <Pressable style={SearchFriend.buttonOpen}
              onPress={() => setUserSearchVisible(true)}>
              {/* <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Add a Friend!</Text> */}
              <Image style={{ height: 27, width: 27, marginLeft: 3 }} source={require('../assets/images/add-user.png')} />
            </Pressable>

          </View>

          <View style={friendPageStyles.friendContainer}>
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
              extraData={selectedIdFriend}
              keyExtractor={(item) => item.user_id_1}
              ListEmptyComponent={<ErrorBanner
                title="You currently haven't added any friends"
                inCase={connectionError}
                extraTitle="Cant't connect!"
              />}
              getItemLayout={(data, index) => (
                { length: 200, offset: 100 * index, index }
              )}
            />
          </View>
        </View>
      </ImageBackground >
    </View >

  );
}