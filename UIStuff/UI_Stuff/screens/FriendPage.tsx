import friendPageStyles from '../styles/FriendPage.style';
import styles from '../styles/Page.style';

//import EditScreenInfo from '../components/EditScreenInfo';

import { ImageBackground, ScrollView, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import { Text, View} from '../components/Themed';
import { useState,  } from 'react';
import  FriendSquare  from "../components/FriendSquare";
import  GroupSquare  from "../components/GroupSquare";
import { FriendSearchWindow } from './FriendSearchWindow';


const DATA = [
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

export default function FriendPageScreen() {
  const [selectedId, setSelectedId] = useState(null);
  
  //Function that gets fed into the flatlist nad render the friend squares.
  const renderFriendSquare = ({ item }:{item:any}) => {
    return (
       FriendSquare(item.level, item.title)
    );
  };

  const renderGroupSquare = ({ item }:{item:any}) => {
    return (
       GroupSquare(item.level, item.title)
    );
  };

  return (

    <View style={styles.container}>
    <ImageBackground resizeMode="cover" style={friendPageStyles.backimg} source={require('../assets/images/forest.png')}>
     
  { /*Group box*/}
    <Text style={styles.title} > Groups</Text>
      <View style={friendPageStyles.groupContainer}>
        {console.log(Math.ceil(DATA.length/3))}
            {/* List of all the friends */}
            <FlatList
              nestedScrollEnabled
              data={DATA}
              renderItem={renderGroupSquare}
              horizontal={false}
              columnWrapperStyle = {{height: 220,}}
              numColumns = {2}
              //keyExtractor={(item) => item.id}
              extraData={selectedId}
              ListEmptyComponent= {<Text>You currently haven't added any friends</Text>}
              getItemLayout={(data, index) => (
                {length: 200, offset: 100 * index, index}
              )}
              
            /> 
        </View> 

     {/* Modal for adding friends */}
     <FriendSearchWindow/>

     
      <Text style={styles.title} > Friends</Text>
      <View style={friendPageStyles.friendContainer}>
        
            {/* List of all the friends */}
            <FlatList
              nestedScrollEnabled
              data={DATA}
              renderItem={renderFriendSquare}
              horizontal={false}
              columnWrapperStyle = {{height: 190,}}
              numColumns = {3}
              //keyExtractor={(item) => item.id}
              extraData={selectedId}
              ListEmptyComponent= {<Text>You currently haven't added any friends</Text>}
              getItemLayout={(data, index) => (
                {length: 200, offset: 100 * index, index}
              )}
              
            /> 
        </View> 
      </ImageBackground>
    </View>
  );
}