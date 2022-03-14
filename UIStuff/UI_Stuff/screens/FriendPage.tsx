import friendPageStyles from '../styles/FriendPage.style';
import styles from '../styles/Page.style';

//import EditScreenInfo from '../components/EditScreenInfo';

import { ImageBackground, ScrollView, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import { Text, View} from '../components/Themed';
import { useState,  } from 'react';
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
  const renderItem = ({ item }:{item:any}) => {
    return (
       GroupSquare(item.level, item.title)
    );
  };

  return (

    <View style={styles.container}>
    <ImageBackground resizeMode="cover" style={friendPageStyles.backimg} source={require('../assets/images/forest.png')}>
     
     {/* Modal for adding friends */}
     <FriendSearchWindow/>

      {/*Group box*/}
      <Text style={styles.title} > Friends</Text>
      <View style={friendPageStyles.groupContainer}>
        
        <ScrollView style= {{paddingBottom: '2%'}} showsVerticalScrollIndicator={false}>
          {/* List of all the friends */}
          <FlatList 
            nestedScrollEnabled
            data={DATA}
            renderItem={renderItem}
            numColumns = {3}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
      </ScrollView>
      </View> 
   
      </ImageBackground>
    </View>
  );
}