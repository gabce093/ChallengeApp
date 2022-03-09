import friendPageStyles from '../styles/FriendPage.style';
import styles from '../styles/Page.style';

//import EditScreenInfo from '../components/EditScreenInfo';

import {  ImageBackground, Modal,Alert, Button ,Image, SectionList, ScrollView, SafeAreaView, FlatList, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View} from '../components/Themed';
import { useState,  } from 'react';
import { GroupSquare } from '../components/GroupSquare';
import { FriendSearchWindow } from '../components/FriendSearchWindow';


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Rullstol",
    level: 43,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Dem bois",
    level: 25,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Kandidat-grupp",
    level: 78,
  },
];


const Item = GroupSquare('45');

export default function FriendPageScreen() {
  const [selectedId, setSelectedId] = useState(null);
  

  const renderItem = ({ item }:{item:any}) => {
    const backgroundColor = "#383838";
    const color = 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (

    <View style={styles.container}>
    <ImageBackground resizeMode="cover" style={friendPageStyles.backimg} source={require('../assets/images/forest.png')}>
     <FriendSearchWindow/>

      {/*Group box*/}
      <Text style={styles.title} > Groups</Text>
      <View style={friendPageStyles.groupContainer}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList 
            nestedScrollEnabled
            data={DATA}
            renderItem={renderItem}
            numColumns = {2}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
      </ScrollView>
      </View> 
   
      {/*<EditScreenInfo path="/screens/FriendPage.tsx" >*/}
      </ImageBackground>
    </View>
  );
}