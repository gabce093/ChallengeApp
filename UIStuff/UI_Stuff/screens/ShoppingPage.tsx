import styles from '../styles/Page.style';
import shopStyles from '../styles/shop.style';
import React, { useEffect, useState } from 'react';
import { Text, View } from '../components/Themed';
import { ImageBackground, TouchableOpacity, ScrollView,FlatList} from "react-native";
import Axios from "axios";

import {buyItem, UpdateHeadImg, UpdateShirtImg, UpdatePantsImg, UpdateShoesImg, UpdateProfilePic} from '../ShopData';
import { getPlayer, getPlayerId } from '../PlayerData';





/**
 *
 * 
 * @author Sofia Sproge, Jonathan Carlsson
 * @returns Itself as a component to be used by the navigation function in Index.
 */


export default function ShoppingPageScreen() {



  const [itemList, setItemList] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);


  //Fetch list of items in shop, combined with owneditems of player with logged in userId.
  const GetShopItems = () => {
       
    Axios.get(`http://213.188.152.167:5000/items/owneditems/${getPlayerId()}`).then((response) => {       
    setItemList(response.data);
    });  

    
  
  }
  //Fetch currently equipped items, update characted clothes from database
  const GetEquippedItems = () => {
       
    Axios.get(`http://213.188.152.167:5000/equipped/${getPlayerId()}`).then((response) => {       
      UpdateProfilePic(response.data[0].hat);
    setHeadImg(`http://213.188.152.167:5000/graphics/character/${response.data[0].hat}.png`)
    setShirtImg(`http://213.188.152.167:5000/graphics/character/${response.data[0].shirt}.png`)
    setPantsImg(`http://213.188.152.167:5000/graphics/character/${response.data[0].pants}.png`)
    setShoesImg(`http://213.188.152.167:5000/graphics/character/${response.data[0].boots}.png`)


    });  
  
  }
 
  useEffect(() => {
    GetShopItems();
    GetEquippedItems();

  }, []);

  //Used to select clothes to wear
  const [headImg, setHeadImg] = useState ('http://213.188.152.167:5000/graphics/character/empty.png');
  const [shirtImg,setShirtImg] = useState ('http://213.188.152.167:5000/graphics/character/empty.png');
  const [pantsImg,setPantsImg] = useState ('http://213.188.152.167:5000/graphics/character/empty.png');
  const [shoesImg,setShoesImg] = useState ('http://213.188.152.167:5000/graphics/character/empty.png');

  
  {/*Used to update the flatList if any new data is written to a specific item */}
  const [selectedId, setSelectedId] = useState(null);
  const [ownedId, setOwnedId] = useState(false);


  {/*Function that sets the image source from the current item, inside headImg and shirtImg */}
  const setClothes = (type:any, imgSource:string) =>{
    if(type == 1){
      setHeadImg(`http://213.188.152.167:5000/graphics/character/${imgSource}.png`);
      UpdateHeadImg(imgSource);
      UpdateProfilePic(imgSource);

    }
    else if(type == 2){
      setShirtImg(`http://213.188.152.167:5000/graphics/character/${imgSource}.png`);
      UpdateShirtImg(imgSource);
    }
    else if(type == 3){
      setPantsImg(`http://213.188.152.167:5000/graphics/character/${imgSource}.png`);
      UpdatePantsImg(imgSource);
    }
    else if(type == 4){
      setShoesImg(`http://213.188.152.167:5000/graphics/character/${imgSource}.png`);
      UpdateShoesImg(imgSource);
    }
    else{
      console.log('error: this item inside ItemDATA has an invalid type');
    }
  }

{/*The render function that renders al the items inside shopMenu (flatList uses this)*/}
  const renderItem = ({ item }:{item:any}) => {
    

var itemOwn = false;

   if (item.id == null){
    itemOwn = false;
  }  
  else {
    itemOwn = true;
   }

    
    return (
      <View style={shopStyles.shopButton}>
      {/*Checks if the character own the item. If it does: show the select button. if not: show the buy button*/}
      {itemOwn ?(
          <TouchableOpacity
          onPress={() => setClothes(item.itemType, item.itemId)}>
           <ImageBackground
              source={{uri:`http://213.188.152.167:5000/graphics/character/${item.itemId}_prev.png` }}
              style={shopStyles.prevImg}>
            </ImageBackground>
            <Text style={shopStyles.itemText}>{item.itemName}</Text>
        </TouchableOpacity>
        ):(
          <TouchableOpacity
            onPress={() => {buyItem(item.itemPrice,item.itemId)? (itemOwn = true, setSelectedId(item.itemId), GetShopItems()) : (itemOwn = false)} }>     
            <ImageBackground
              source={{uri:`http://213.188.152.167:5000/graphics/character/${item.itemId}_prev.png` }}
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
           source={require('../Graphics/character/Base_Character.png')}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

          {/*Render the character. Use states to render the different images for the head and shirt. These are changed with the buttons in the shopMenu*/}
         
 
         <ImageBackground
           source={{uri:shirtImg}}
           fadeDuration={0}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>
        
         <ImageBackground
           source={ {uri:pantsImg}}
           fadeDuration={0}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

         <ImageBackground
           source={ {uri:shoesImg}}
           fadeDuration={0}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

         <ImageBackground
           source={ {uri:headImg}}
           fadeDuration={0}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

       </View>

        <Text style={shopStyles.titleText}>Shop</Text>
      
        <View style ={shopStyles.shopMenu}>
          
              {/* List of all the friends */}
              <FlatList 
                nestedScrollEnabled
                data={itemList}
                renderItem={renderItem}
                numColumns = {3}
                keyExtractor={(item) => item.itemId}
                extraData={selectedId}
              />
              

        </View>
        
 
       </ImageBackground>
       </ImageBackground>
     </View>
   );
 }
