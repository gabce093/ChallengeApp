import styles from '../styles/Page.style';
import friendPageStyles from '../styles/FriendPage.style';
import inboxStyles from '../styles/Inbox.style.js';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ImageBackground, FlatList, TouchableOpacity, Button, RefreshControl } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import conn from '../constants/databaseAPI';

//import EditScreenInfo from '../components/EditScreenInfo';
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

export default function ChallengePageScreen() {

  const [user, setUser] = useState('');
  const [friendRequest, setFriendRequest] = useState([]);
  const [error, setIsError] = useState(false);

  const searchFriendRequest = (id: string) => {
    console.log("Logged in as: " + id)
    var APIaddress = conn.API.adress + conn.API.port;

    Axios.get(APIaddress + '/relations/request/' + id).then((response) => {
      setFriendRequest(response.data);
    });
  };

  const acceptRequest = (relationId: string) => {
    console.log("The realtion id: " + relationId)
    var APIaddress = conn.API.adress + conn.API.port;

    Axios.put(APIaddress + '/accept/request', { relId: relationId }).then((response) => {
      alert("update")
    });
  };

  const declineRequest = (relationId: string) => {
    console.log("The relation id is: " + relationId)
    var APIaddress = conn.API.adress + conn.API.port;

    Axios.put(APIaddress + '/decline/request', { relId: relationId }).then((response) => {
      alert("declined")
    });
  };

  const asyncAction = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_Key')
      if (value !== null) {
        setUser(value);
        searchFriendRequest(value);

      }
    } catch (e) {
      setIsError(true);
    }
  }

  useEffect(() => {
    asyncAction();
  }, []);

  const renderRequest = ({ item }: { item: any }) => {

    return (
      <TouchableOpacity style={inboxStyles.friendRequestContainer}>
        <Text>{item.name}</Text>
        <Button title="Accept" onPress={() => acceptRequest(item.relation_id)}></Button>
        <Button title="Decline" onPress={() => declineRequest(item.relation_id)}></Button>
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
            //  style={inboxStyles.list}
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