import styles from '../styles/Page.style';
import shopStyles from '../styles/shop.style';
//import EditScreenInfo from '../components/EditScreenInfo';
import React, { useState } from 'react';
import { Text, View } from '../components/Themed';
import { Image, ImageBackground, Pressable} from "react-native";


export default function ShoppingPageScreen() {
 
  const [headImg, setHeadImg] = useState (require('../Graphics/character/kepps.png'));
  const [shirtImg,setShirtImg] = useState (require('../Graphics/character/hoodie.png'));
 
   return (
     <View style={styles.container}>
       <ImageBackground source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover">
       <ImageBackground source={require('../Graphics/banan.png')} style={styles.banan} resizeMode="stretch">
       
       
       {/*<Image source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover"></Image>*/}
       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
       
       <View style = {shopStyles.characterContainer}>
         {/*Original character is always rendered */}
         <ImageBackground
           source={require('../Graphics/character/wut2.png')}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>
       
         <ImageBackground
           source={headImg}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>
 
         <ImageBackground
           source={shirtImg}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>
         
       </View>
 
       <View style = {shopStyles.shopMenu}>
       
       <Text></Text>
         <Pressable
           onPress={() => setHeadImg(require('../Graphics/character/kepps2.png'))}
           style={shopStyles.shopButton}>
           <Text>Set Moose hat</Text>
         </Pressable>
         
         <Pressable
           onPress={() => setShirtImg(require('../Graphics/character/hoodie2.png'))}
           style={shopStyles.shopButton}>
                
           <Text>Set noise Hoodie</Text>
         </Pressable>
 
         <Pressable
            onPress={() => setHeadImg(require('../Graphics/character/kepps.png'))}
            style={shopStyles.shopButton}>
           <Text>Set Blue hat</Text>
         </Pressable>
        
         <Pressable
           onPress={() => setShirtImg(require('../Graphics/character/hoodie.png'))}
           style={shopStyles.shopButton}>
           <Text>Set blue hoodie</Text>
         </Pressable>
 
         <Pressable
           onPress={() => setHeadImg(require('../Graphics/character/empty.png'))}
           style={shopStyles.shopButton}>
           <Text>Set original hair</Text>
         </Pressable>
         
         <Pressable
           onPress={() => setShirtImg(require('../Graphics/character/empty.png'))}
           style={shopStyles.shopButton}>
           <Text>Set original shirt</Text>
         </Pressable>
         
       </View>
 
       </ImageBackground>
       </ImageBackground>
     </View>
   );
 }
