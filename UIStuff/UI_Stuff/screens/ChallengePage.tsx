//React imports
import { ImageBackground, FlatList, RefreshControl, View, Text } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
//Styles
import styles from '../styles/Page.style';
import inboxStyles from '../styles/Inbox.style.js';
//Components
import FriendRequestCard from '../components/FriendRequest';
import ChallengeRequestCard from '../components/ChallengeRequest';
import ChallengeInfoCard from '../components/ChallengeInfoCard';
import ErrorBanner from '../components/errorBanner';
//Additional libraries
import AsyncStorage from '@react-native-async-storage/async-storage'
//API requests
import { getFriendRequests, acceptRequest, declineRequest } from '../API/InboxPage/requestsInboxPage';
import { getChallengeRequests, removeChallenge } from '../API/Challenges/requestsChallenges';

/**
 * This is the the apps inbox-page. It displays the recieved challenges and friend-requests. On it you can accept or decline
 * friend-requests and accept or decline challenges. It refreshes when you pull down on the screen.
 *
 * @returns The entire FriendPage for the app
 * @category Friendpage
 */
export default function ChallengePageScreen(props: any): JSX.Element {

  const [user, setUser] = useState('');

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

  const [affirm, setAffirm] = useState(false);
  //FUNCTION: 
  const affirmAndRemove = async (challengeId: string) => {
    removeChallenge(challengeId).then(() => {
      setAffirm(true);
    });
    //Waits 1 second to show that it was accepted
    await wait(1000)
    //searches again so thath it disappears
    getChallengeRequests(user).then((data) => {
      setChallengeRequest(data)
    });
  };

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

  const [connectionError, setConnectionError] = useState(false);
  const [friendRequest, setFriendRequest] = useState([]);
  const [challengeRequest, setChallengeRequest] = useState([]);
  //FUNCTION:Runs on load to find friendrequests
  const asyncAction = async () => {
    try {
      const currentUserId = await AsyncStorage.getItem('@userID_Key')
      if (currentUserId !== null) {
        setUser(currentUserId);
        //Retrieves the users friend-request
        getFriendRequests(currentUserId).then((data) => {
          setFriendRequest(data)
        }).catch((error) => [console.log(error + ' when retrieving friend requests in ChallengePage.tsx (asyncAction-function)')
          , setConnectionError(true)]);
        //Retrieves the users challenge-request
        getChallengeRequests(currentUserId).then((data) => {
          setChallengeRequest(data)
        }).catch((error) => [console.log(error + ' when retrieving challenge requests in ChallengePage.tsx (asyncAction-function)')
          , setConnectionError(true)]
        );

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
  const [selectedId, setSelectedId] = useState('')

  //FUNCTION: Used in the flatlist to render the friend-and challenge requests
  const renderFriendRequest = ({ item }: { item: any }) => {

    //Removes status pendingCard with status one from the users who completed it
    if (item.toId == user && item.status == 1) return <></>;

    if (item.distance == null) { // then it is a friend-request
      return <FriendRequestCard item={item}
        onAccept={() => [setSelectedId(item.relationId), acceptAndRefresh(item.relationId)]}
        onDecline={() => [setSelectedId(item.relationId), declineAndRefresh(item.relationId)]}
        selectedId={selectedId}
        acceptPressed={acceptPressed}
        declinePressed={declinePressed} />
    }
    if (item.fromId == user) {

      return <ChallengeInfoCard item={item}
        onPress={() => [setSelectedId(item.challengeId), affirmAndRemove(item.challengeId), console.log(item.challengeId)]}
        selectedId={selectedId}
        pressed={affirm}
      />
    }

    return <ChallengeRequestCard
      item={item}
      onAccept={() => [console.log('Challenge accepted!'), props.navigation.navigate('GPSPage')]}
      selectedId={selectedId}
      acceptPressed={acceptPressed}
    />
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

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={[styles.forestBackground,
      { justifyContent: 'flex-end', alignItems: 'center' }]} source={require('../assets/images/forest.png')}>
        <Text style={styles.title}>Inbox</Text>
        <View style={inboxStyles.inboxContainer}>
          {/* List of friendrequests*/}
          <FlatList
            refreshControl={<RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />}
            nestedScrollEnabled
            data={challengeRequest.concat(friendRequest)}
            renderItem={renderFriendRequest}
            extraData={selectedId}
            keyExtractor={(item, index) => `${index}`}
            ListEmptyComponent={<ErrorBanner
              title="Your inbox is currently empty"
              inCase={connectionError}
              extraTitle="Cant't connect!"
            />}
            getItemLayout={(_, index) => (
              { length: 200, offset: 200 * index, index }
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}