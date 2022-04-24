//React
import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
//Styles
import styles from '../styles/SearchFriend.style.js';
import friendPageStyles from '../styles/FriendPage.style';
//Additional libraries
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
//API requests
import { searchUser, sendFriendRequest } from '../API/FriendPage/requestsFriendPage'

/** 
* @remarks This function generates a search result as a FlatList.
* 
*@param user The user that is searching
*@returns A list of users
*@category Friendpage
*/

const renderUserList = ({ user }: { user: string }) => {
  const [activeSections, setActiveSections] = useState([]);


  const setSections = (sections: any) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };
  const [data, setData] = useState([]);
  const [selectId, setSelectedId] = useState([]);


  const renderHeader = (item: any, _: number, isActive: boolean) => {

    return (
      <Animatable.View
        duration={400}
        transition="backgroundColor"
        style={[styles.header, isActive ? styles.active : styles.inactive, { backgroundColor: '#383838' }]}
      >
        <View style={{
          backgroundColor: '#383838',
          alignItems: 'center',
          marginTop: '2%',
        }}>
          <View style={[friendPageStyles.lvlBadge, { marginTop: '50%' }]}>

            {/* Text dispalying the level */}
            <Text style={friendPageStyles.lvlText}>{item.expAmount}</Text>
          </View>

          {/* user icon for the friend */}
          <Image style={{
            width: 90,
            height: 90,
            borderRadius: 100,
            borderWidth: 4,
            borderColor: "#766449"
          }}
            source={require('../assets/images/emptyPlayerIcon.png')}
          />
        </View>
        <View style={{ alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#383838' }}>
          <Animatable.Text style={styles.headerText}>{item.userName} | Level {item.expAmount}</Animatable.Text>
        </View>
      </Animatable.View>
    );
  };


  const [searchWord, setSearchWord] = useState('');

  const renderContent = (item: any, _: number, isActive: boolean) => {
    if (item.status == 1)
      var status = <Text>You are already friends</Text>
    else if (item.status == 2)
      var status = <Text>Request pending...</Text>
    else if (item.id == selectId) {
      var status = <Text>Request Sent!</Text>;
    }
    else {
      var status =
        <Button onPress={() => [setSelectedId(item.id), sendFriendRequest(user, item.id),
        searchUser(user, searchWord)
          .then(data => {
            setData(data);
          })
          .catch((error) => console.log(error + ' when searching for user in friendSearchList.tsx'))
        ]} title='Send Request' />
    }

    return (
      <Animatable.View
        duration={400}
        style={[styles.content]}
        transition="backgroundColor">
        {status}
      </Animatable.View>
    )
  };
  return (
    <>
      {/* Input to write tha name of the friend */}
      <TextInput style={styles.textWindow}
        onChangeText={(text) => [setSearchWord(text), searchUser(user, text)
          .then(data => {
            setData(data);
            setActiveSections([])
          })
          .catch((error) => console.log(error + ' when searching for user in friendSearchList.tsx'))]
        }
        placeholder={'Type name...'} />
      <ScrollView>
        {/*Code for Accordion/Expandable List starts here*/}
        <Accordion
          activeSections={activeSections}
          //for any default active section

          sections={data}
          //title and content of accordion
          touchableComponent={TouchableOpacity}
          //which type of touchable component you want
          //It can be the following Touchables
          //TouchableHighlight, TouchableNativeFeedback
          //TouchableOpacity , TouchableWithoutFeedback
          expandMultiple={false}
          //Do you want to expand mutiple at a time or single at a time
          renderHeader={renderHeader}
          //Header Component(View) to render
          renderContent={renderContent}
          //Content Component(View) to render
          duration={400}
          //Duration for Collapse and expand
          onChange={(index) => [setSections(index)]}
        //setting the state of active sections

        />
        {/*Code for Accordion/Expandable List ends here*/}
      </ScrollView>
    </>
  );
}

export default renderUserList;