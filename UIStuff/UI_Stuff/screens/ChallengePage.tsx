import styles from '../styles/Page.style';
import friendPageStyles from '../styles/FriendPage.style';
import inboxStyles from '../styles/Inbox.style.js';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ImageBackground, FlatList, TouchableOpacity, Image, RefreshControl, Pressable } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import UserIcon from '../components/UserIconLarge'
import { getFriendRequests, acceptRequest, declineRequest } from '../API/InboxPage/requestsInboxPage';

import { Text, View } from '../components/Themed';

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

  //FUNCTION: Updates the friend-request to accepted in the database
  const acceptAndRefresh = async (relationId: string) => {
    acceptRequest(relationId).then(() => {
      setAcceptPressed(true);
    });
    //Waits 1 second to show that it was accepted
    await wait(1000)
    //searches again so thath it disappears
    getFriendRequests(user).then((data) => {
      setFriendRequest(data)
    });
  };

  const [selectedId, setSelectedId] = useState('')

  //FUNCTION:Updates the friend-request to declined in the database
  const declineAndRefresh = async (relationId: string) => {
    declineRequest(relationId).then(() => {
      setDeclinePressed(true);
    });
    //Waits 1 second to show that it was declined  
    await wait(1000)
    getFriendRequests(user).then((data) => {
      setFriendRequest(data)
    });
  };

  //FUNCTION:Runs on load to find friendrequests
  const asyncAction = async () => {
    try {
      const currentUserId = await AsyncStorage.getItem('@user_Key')
      if (currentUserId !== null) {
        setUser(currentUserId);
        //Retrieves the users friend-request
        getFriendRequests(currentUserId).then((data) => {
          setFriendRequest(data)
        });

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
  //FUNCTION:Renders the friend-request
  const renderRequest = ({ item }: { item: any }) => {
    var status;
    if (acceptPressed && item.relationId == selectedId) {
      status = <Text style={{ color: 'white' }}>Accepted!</Text>
    }
    else if (declinePressed && item.relationId == selectedId) {
      status = <Text style={{ color: 'white' }}>Declined :(</Text>
    }
    else {
      status = <>
        <Pressable style={inboxStyles.acceptButton} onPress={() => [setSelectedId(item.relationId), acceptAndRefresh(item.relationId)]}>
          <Image source={require('../assets/images/check.png')} style={{
            width: '60%',
            height: '60%',
          }} />
        </Pressable>
        <Pressable style={inboxStyles.declineButton} onPress={() => [setSelectedId(item.relationId), declineAndRefresh(item.relationId)]}>
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
          <UserIcon level={item.expAmount} />
          <Text style={inboxStyles.messageFromText}>{item.userName}</Text>
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
            extraData={selectedId}
            keyExtractor={(item) => item.id}
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