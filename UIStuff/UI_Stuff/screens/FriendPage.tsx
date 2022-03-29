import friendPageStyles from '../styles/FriendPage.style';
import styles from '../styles/Page.style';

//import EditScreenInfo from '../components/EditScreenInfo';

import { ImageBackground, FlatList, Text, View, TextInput, Button } from 'react-native';
import { useState, } from 'react';
import FriendSquare from "../components/FriendSquare";
import GroupSquare from "../components/GroupSquare";
import { FriendSearchWindow } from './FriendSearchWindow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';


const FRIENDS = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Jake",
    level: 43,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Bob",
    level: 25,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Billy",
    level: 78,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Billy",
    level: 78,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Billy",
    level: 78,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Billy",
    level: 78,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Billy",
    level: 78,
  },
];

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
  const [selectedId, setSelectedId] = useState(null);
  const [user, setUser] = useState('');
  const [friends, setFriends] = useState([]);


  const storeData = async (value:string) => {
    try {
      await AsyncStorage.setItem('@user_Key', value)
    } catch (e) {
      // saving error
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_Key')
      if(value !== null) {
        // value previously stored
    
      }
    } catch(e) {
      // error reading value
    }
  }

  const searchFriends = (id:string) => {
    Axios.get('http://192.168.1.93:3001/relations/'+ id).then((response)=> {
    setFriends(response.data);

    });
  };

  //Function that gets fed into the flatlist nad render the friend squares.
  const renderFriendSquare = ({ item }: { item: any }) => {
    return (
      FriendSquare(item.xp, item.name)
    );
  };

  const renderGroupSquare = ({ item }: { item: any }) => {
    return (
      GroupSquare(item.level, item.title)
    );
  };

searchFriends('7');

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
            extraData={selectedId}
            ListEmptyComponent={<Text>You currently haven't created a group</Text>}
            getItemLayout={(data, index) => (
              { length: 200, offset: 100 * index, index }
            )}

          />
        </View>

        {/* Modal for adding friends */}
        <FriendSearchWindow />
        <TextInput placeholder='Name of user...' onChangeText={(text)=> setUser(text) } onSubmitEditing={()=> storeData(user)}/> 
        <Button title='Retrive data' onPress={()=> getData()}/>
              

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
            keyExtractor={(item) => item.user_id_1}
            extraData={selectedId}
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