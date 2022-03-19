import React, { useState, useEffect, } from "react";
import Modal from "react-native-modal";
import { Box, FlatList, Center, NativeBaseProvider} from "native-base";
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

import styles from '../styles/SearchFriend.style.js';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    firstName: "Jake",
    lastName: "Carlsson",
    level: 43,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    firstName: "Bob",
    lastName: "Carlsson",
    level: 25,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    firstName: "Billy",
    lastName: "Carlsson",
    level: 78,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    firstName: "Billy",
    lastName: "Carlsson",
    level: 78,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    firstName: "Billy",
    lastName: "Carlsson",
    level: 78,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    firstName: "Billy",
    lastName: "Carlsson",
    level: 78,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d76",
    firstName: "Billy",
    lastName: "Cederqvist",
    level: 78,
  },
  
  
];

const CONTENT = [
  {
   
    title: "Jake",
    content: "Carlsson",
    level: 34,
  
  },
  {
   
    title: "Bob",
    content: "Carlsson",
    level: 14,
   
  },
  {
    
    title: "Billy",
    content: "Carlsson",
    level: 89,
   
  },

];


const GetUserlist = (searchWord:string) =>
{

    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(true);

    const [activeSections, setActiveSections] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [multipleSelect, setMultipleSelect] = useState(false);

    const toggleExpanded = () => {
      //Toggling the state of single Collapsible
      setCollapsed(!collapsed);
    };
    const setSections = (sections:any) => {
      //setting up a active section state
      setActiveSections(sections.includes(undefined) ? [] : sections);
    };
    
   // let searchWord = "Z1n04";
    const fetchData = async () => {
        
        const resp = await fetch(`http://213.188.152.167:5000/users/` +searchWord);
        const data = await resp.json();
        setData(data);
       
        setVisible(false);
      };

   
const renderHeader = ( section:any, _:any, isActive:any) => {
   
    return (
      <Animatable.View  
        duration={400} 
        transition="backgroundColor" 
        style={[styles.header, isActive ? styles.active : styles.inactive]}
      >       
           <Animatable.Text style={styles.headerText}>{section.title} {section.content} Level {section.level}</Animatable.Text>
      </Animatable.View>
    );
  };
 
 const renderContent = (section:any, _:any, isActive:any) => {
   
    return (
      <Animatable.View  
        duration={400}
        style={[styles.content]}
        transition="backgroundColor">     
              <Button 
                onPress={() =>console.log('collapse button')}
                title='Send Request'/>
                 
          {/* <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text> */}
    </Animatable.View>
    )
  };

  
  return (
    // <NativeBaseProvider>
      
    //   <Center 
    //   flex={1}
    //   >

        // {/* {<Button onPress={() => fetchData()}>Submit</Button>} 
        // {DATA && (
        //   <FlatList
        //     data={DATA}
        //     renderItem={renderUser}
        //     keyExtractor={(item) => item.id.toString()}
        //   />
        // )}     */}
      
    
        <ScrollView>
          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
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
      
  
    //   </Center>
    // </NativeBaseProvider>
  );
}
export default GetUserlist;

