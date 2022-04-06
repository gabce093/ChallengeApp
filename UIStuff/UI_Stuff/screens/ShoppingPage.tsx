import styles from '../styles/Page.style';
import shopStyles from '../styles/shop.style';
import React, { useEffect, useState } from 'react';
import { Text, View } from '../components/Themed';
import { ImageBackground, TouchableOpacity, ScrollView,FlatList} from "react-native";
import Axios from "axios";

import {buyItem} from '../ShopData';




// const ItemDATA = [
//   {
//     id: "item-1",
//     title: "Yellow Hair",
//     source: require('../Graphics/character/empty.png'),
//     prevImage: require('../Graphics/character/orgHair_prev.png'),
//     cost: 1,
//     own:true,
//     type: 'head',
//   },
//   {
//     id: "item-2",
//     title: "Orange Shirt",
//     source: require('../Graphics/character/empty.png'),
//     prevImage: require('../Graphics/character/orgShirt_prev.png'),
//     cost: 1,
//     own:true,
//     type: 'shirt',
//   },
//   {
//     id: "item-3",
//     title: "Moose hat",
//     source: require('../Graphics/character/kepps2.png'),
//     prevImage: require('../Graphics/character/kepps2_prev.png'),
//     cost: 1,
//     own:false,
//     type: 'head',
//   },
//   {
//     id: "item-4",
//     title: "Noise Hoodie",
//     source: require('../Graphics/character/hoodie2.png'),
//     prevImage: require('../Graphics/character/hoodie2_prev.png'),
//     cost: 4,
//     own:false,
//     type: 'shirt',
//   },

//   {
//     id: "item-5",
//     title: "Blue Hoodie",
//     source: require('../Graphics/character/hoodie.png'),
//     prevImage: require('../Graphics/character/hoodie_prev.png'),
//     cost: 2,
//     own:false,
//     type: 'shirt',
//   },
//   {
//     id: "item-6",
//     title: "Wavy Hoodie",
//     source: require('../Graphics/character/hoodie3.png'),
//     prevImage: require('../Graphics/character/hoodie3_prev.png'),
//     cost: 3,
//     own:false,
//     type: 'shirt',
//   },
//   {
//     id: "item-7",
//     title: "Winged Cap",
//     source: require('../Graphics/character/kepps.png'),
//     prevImage: require('../Graphics/character/kepps_prev.png'),
//     cost: 2,
//     own:false,
//     type: 'head',
//   },
  
// ];



export default function ShoppingPageScreen() {



  const [itemList, setItemList] = useState([]);

  const GetShopItems = () => {
       
    Axios.get("http://213.188.152.167:5000/items").then((response) => {       
    setItemList(response.data);
    console.log(response.data);
    });  
  
  }
 
  useEffect(() => {
    GetShopItems();   
  }, []);

  //Used to select clothes to wear
  const [headImg, setHeadImg] = useState (require('../Graphics/character/empty.png'));
  const [shirtImg,setShirtImg] = useState (require('../Graphics/character/empty.png'));
  const [thisPrevImg,setThisImg] = useState('');

  
  {/*Used to update the flatList if any new data is written to a specific item */}
  const [selectedId, setSelectedId] = useState(null);

  {/*Function that sets the image source from the current item, inside headImg and shirtImg */}
  const setClothes = (type:any, imgSource:string) =>{
    if(type == 1){
      setHeadImg(imgSource);
    }
    else if(type == 2){
      setShirtImg(imgSource);
    }
    else{
      console.log('error: this item inside ItemDATA has an invalid type');
    }
  }

{/*The render function that renders al the items inside shopMenu (flatList uses this)*/}
  const renderItem = ({ item }:{item:any}) => {
    console.log(item.itemId);
    setThisImg(`../Graphics/character/${item.itemId}_prev`);
    return (
      <View style={shopStyles.shopButton}>
      {/*Checks if the character own the item. If it does: show the select button. if not: show the buy button*/}
      {item.own ?(
          <TouchableOpacity
          onPress={() => setClothes(item.itemType, `../Graphics/character/${item.itemId}`)}>
           <ImageBackground
              source={require(thisPrevImg)}
              style={shopStyles.prevImg}>
            </ImageBackground>
            <Text style={shopStyles.itemText}>{item.itemName}</Text>
        </TouchableOpacity>
        ):(
          <TouchableOpacity
            onPress={() => {buyItem(item.cost)[0]? (item.own = true, setSelectedId(item.id)) : (item.own = false)} }>     
            <ImageBackground
              source={require(`../Graphics/character/${item.itemId}_prev`)}
              style={shopStyles.prevImg}>
          </ImageBackground>
          <Text style={shopStyles.itemText}>Buy for: {item.itemPrice} &#x1F315;</Text>
          </TouchableOpacity>
        )
      }
    </View>

    );
  };


   return (
     <View style={styles.container}>
       <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
       <ImageBackground source={require('../Graphics/banan.png')} style={styles.banan} resizeMode="stretch">
       
       
       {/*<Image source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover"></Image>*/}
       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
       
       <View style = {shopStyles.characterContainer}>

         {/*Original character is always rendered */}
         <ImageBackground
           source={require('../Graphics/character/wut2.png')}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

          {/*Render the character. Use states to render the different images for the head and shirt. These are changed with the buttons in the shopMenu*/}
         <ImageBackground
           source={headImg}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>
 
         <ImageBackground
           source={shirtImg}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>
         

       </View>

        <Text style={shopStyles.titleText}>The ssShop</Text>
      
        <View style ={shopStyles.shopMenu}>
          <ScrollView style= {{paddingBottom: '2%'}} showsVerticalScrollIndicator={false}>
              {/* List of all the friends */}
              <FlatList 
                nestedScrollEnabled
                data={itemList}
                renderItem={renderItem}
                numColumns = {3}
                keyExtractor={(item) => item.itemId}
                extraData={selectedId}
              />
          </ScrollView>        

        </View>
        
 
       </ImageBackground>
       </ImageBackground>
     </View>
   );
 }
