import React, { useState, useEffect, } from "react";
import Modal from "react-native-modal";
import { Box, FlatList, Center, NativeBaseProvider,  View } from "native-base";
import {TouchableOpacity, Text, Button} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';


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

const DATA2 = [
  {
   
    title: "Jake",
    content: "Carlsson",
  
  },
  {
   
    title: "Bob",
    content: "Carlsson",
   
  },
  {
    
    title: "Billy",
    content: "Carlsson",
   
  },

];


export default function GetUserlist(searchWord:string)
{

    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(true);

    const [activeSections, setActiveSections] = useState([]);
    const [collapsed, setCollapsed] = useState(true);

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

   
const renderUser = ({ section, _, isActive}:{section:any}) => {
   
    return (
      <Animatable.View  duration={400} transition="backgroundColor" style={[styles.header, isActive ? styles.active : styles.inactive]}>       
          {/* <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
          {section.title}{section.title}
          </Box>  */}
           <Text style={styles.headerText}>{section.title}</Text>
          </Animatable.View>
    );
  };
 
 const renderButton = ({ section, _, isActive}:{section:any}) => {
   
    return (
      <Animatable.View  duration={400}
      style={[styles.content]}
      transition="backgroundColor">     
              {/* <Button 
                onPress={() =>console.log('collapse button')}
                title='Send Request'/> */}
                 
                 <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text>
    </Animatable.View>
    )
  };

  // const renderItem = ({ item}:{item:any}) => {
   
  //   return (
  //     <View>
  //       <TouchableOpacity  onPress={()=> toggleExpanded()}>
  //         <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
  //         {item.firstName}{item.lastName}
  //         </Box> 
  //       </TouchableOpacity>

  //       <Collapsible collapsed={collapsed} align="center">
  //           <View >
  //             <Button 
  //               onPress={console.log('collapse button')}
  //               title='Send Request'
  //             />
              
  //           </View>

  //         </Collapsible>

  //       </View>
  //   );
  // };
  
  return (
    <NativeBaseProvider>
      
      <Center flex={1}>

        {/* {<Button onPress={() => fetchData()}>Submit</Button>} 
        {DATA && (
          <FlatList
            data={DATA}
            renderItem={renderUser}
            keyExtractor={(item) => item.id.toString()}
          />
        )}     */}

            <Accordion
             activeSections={activeSections}
            //for any default active section
            sections={DATA2}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={false}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={renderUser}
            //Header Component(View) to render
            renderContent={renderButton}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={setSections}
            //setting the state of active sections
          />
           
      </Center>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});

