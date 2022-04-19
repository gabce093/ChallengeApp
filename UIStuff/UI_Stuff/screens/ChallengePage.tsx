import styles from '../styles/Page.style';
import friendPageStyles from '../styles/FriendPage.style';
import inboxStyles from '../styles/Inbox.style.js';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ImageBackground, FlatList, TouchableOpacity, Image, RefreshControl, Pressable } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import conn from '../constants/databaseAPI';
import UserIcon from '../components/UserIconLarge'


import { Text, View } from '../components/Themed';


const friendRequestData = [
  {
    relationId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bf",
    fromId: 24,
    toId: 11,
    status: 2,
    name: 'Jonca320',
  },
  {
    relationId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bs",
    fromId: 24,
    toId: 11,
    status: 2,
    name: 'Hengu510',
  },
  {
    relationId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bk",
    fromId: 24,
    toId: 11,
    status: 2,
    name: 'Vicim994',
  },]

/**
 * This is the the apps inbox-page. It displays the recieved challenges and friend-requests. On it you can accept or decline
 * friend-requests and accept or decline challenges. It refreshes when you pull down on the screen.
 *
 * @returns The entire FriendPage for the app
 * @category Friendpage
 */
export default function ChallengePageScreen() {

  const [user, setUser] = useState('');
  const [friendRequest, setFriendRequest] = useState([]);
  const [error, setIsError] = useState(false);


  const searchFriendRequest = (id: string) => {
    console.log("Logged in as: " + id)
    var APIaddress = conn.API.adress + conn.API.port;

    //Retrieves friend-requests form the database
    Axios.get(APIaddress + '/relations/request/' + id).then((response) => {
      setFriendRequest(response.data);

    });
  };

  //Updates the friend-request to accepted in the database
  const acceptRequest = async (relationId: string) => {
    var APIaddress = conn.API.adress + conn.API.port;
    Axios.put(APIaddress + '/accept/request', { relId: relationId }).then((response) => {
      setAcceptPressed(true);

    });
    //Waits 1 second to show that it was accepted
    await wait(1000)
    searchFriendRequest(user)
  };
  //Updates the friend-request to declined in the database
  const declineRequest = async (relationId: string) => {
    var APIaddress = conn.API.adress + conn.API.port;
    Axios.put(APIaddress + '/decline/request', { relId: relationId }).then((response) => {
      alert("declined")
      setDeclinePressed(true)
    });
    //Waits 1 second to show that it was declined  
    await wait(1000)
    searchFriendRequest(user)
  };

  const asyncAction = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_Key')
      if (value !== null) {
        setUser(value);
        searchFriendRequest(value);
        setAcceptPressed(false)
        setDeclinePressed(false)

      }
    } catch (e) {
      setIsError(true);
    }
  }

  useEffect(() => {
    asyncAction();
  }, []);

  const [acceptPressed, setAcceptPressed] = useState(false);
  const [declinePressed, setDeclinePressed] = useState(false);
  //Renders the friend-request
  const renderRequest = ({ item }: { item: any }) => {
    var status;
    if (acceptPressed) {
      status = <Text style={{ color: 'white' }}>Accepted!</Text>
    }
    else if (declinePressed) {
      status = <Text style={{ color: 'white' }}>Declined :(</Text>
    }
    else {
      status = <>
        <Pressable style={inboxStyles.acceptButton} onPress={() => acceptRequest(item.relation_id)}>
          <Image source={require('../assets/images/check.png')} style={{
            width: '60%',
            height: '60%',
          }} />
        </Pressable>
        <Pressable style={inboxStyles.declineButton} onPress={() => declineRequest(item.relation_id)}>
          <Image source={require('../assets/images/cancel.png')} style={{
            width: '60%',
            height: '60%',
          }} />
        </Pressable>
      </>
    }

    return (
      <TouchableOpacity style={inboxStyles.friendRequestContainer}>
        <View style={inboxStyles.imageAndNameHolder}>
          <UserIcon level={item.xp} />
          <Text style={inboxStyles.messageFromText}>{item.name}</Text>
        </View>

        <View style={inboxStyles.textAndButtonsHolder}>

          <View style={{ backgroundColor: '#383838' }}>
            <Text style={inboxStyles.messageHeadText}>Friend Request!</Text>
          </View>

          <View style={inboxStyles.statusButtonHolder}>
            {status}
          </View>

        </View>
      </TouchableOpacity>

    );
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

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={friendPageStyles.backimg} source={require('../assets/images/forest.png')}>

        <View style={inboxStyles.inboxContainer}>

          {/* List of friendrequests*/}
          <FlatList
            refreshControl={<RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
            nestedScrollEnabled
            data={friendRequest}
            renderItem={renderRequest}
            keyExtractor={(item) => item.user_id}
            ListEmptyComponent={<Text>There is nothing in your inbox</Text>}
            getItemLayout={(data, index) => (
              { length: 200, offset: 200 * index, index }
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}