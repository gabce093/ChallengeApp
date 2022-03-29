import React, { useState, useEffect, } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/SearchFriend.style.js';
import friendPageStyles from '../styles/FriendPage.style';

export default function renderUserList(data: any) {

  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections: any) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section: any, _: any, isActive: any) => {

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
            <Text style={friendPageStyles.lvlText}>{section.xp}</Text>
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
          <Animatable.Text style={styles.headerText}>{section.title} {section.name} | Level {section.xp}</Animatable.Text>
        </View>
      </Animatable.View>
    );
  };

  const renderContent = (section: any, _: any, isActive: any) => {

    return (
      <Animatable.View
        duration={400}
        style={[styles.content]}
        transition="backgroundColor">
        <Button
          onPress={() => console.log('collapse button')}
          title='Send Request' />
        {/* <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text> */}
      </Animatable.View>
    )
  };


  return (

    <ScrollView>
      {/* <Button title= "press" onPress={()=> searchUser()}/> */}
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
  );
}