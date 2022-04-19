import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  TextInput
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/SearchFriend.style.js';
import friendPageStyles from '../styles/FriendPage.style';

import conn from '../constants/databaseAPI';

import Axios from 'axios';

import { searchUser } from '../API/FriendPage/APIrequests'

/** 
* @remarks This function generates a search result as a FlatList.
* 
*@param user The user that is searching
*@returns A list of users
*@category Friendpage
*/

export default function renderUserList(user: string) {
  const APIaddress = conn.API.adress + conn.API.port;
  const [activeSections, setActiveSections] = useState([]);
  const [showButton, setShowButton] = useState(true);

  const setSections = (sections: any) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const [data, setData] = useState([]);

  const addFriend = (toUser: string) => {
    console.log(user + ' added ' + toUser);

    setShowButton(false);

    Axios.post(APIaddress + '/friends/create', {
      from: user,
      to: toUser,
    }).then(() => {
      console.log('Success');
    });
  };

  const renderHeader = (item: any, _: any, isActive: any) => {

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

  const renderContent = (section: any, _: any, isActive: any) => {

    if (section.status == 1)
      var status = <Text>You are already friends</Text>
    else if (section.status == 2)
      var status = <Text>Request pending...</Text>
    else {
      var status = showButton === true ?
        <Button onPress={() => addFriend(section.id)} title='Send Request' /> : <Text>Request Sent!</Text>
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
        onChangeText={(text) => searchUser(user, text)
          .then(data => {
            setData(data);
            console.log(data)
          })
          .catch(() => console.log('error when searching user'))
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
          onChange={setSections}
        //setting the state of active sections
        />
        {/*Code for Accordion/Expandable List ends here*/}
      </ScrollView>
    </>
  );
}