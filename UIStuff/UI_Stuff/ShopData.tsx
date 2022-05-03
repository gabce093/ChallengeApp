//import React, { useState } from "react";
//import { RecyclerViewBackedScrollViewBase } from "react-native";
var profilePic ="";
import {removeCoins, getCoins,getPlayerId} from './PlayerData';
import Axios from "axios";

/**
 *
 * 
 * @author Sofia Sproge 
 * @author Jonathan Carlsson
 * @returns Itself as a component to be used by the navigation function in Index.
 */


//Add item to inventory
export const AddInventoryItem = (itemId:string) => {
       
    Axios.post(`http://213.188.152.167:5000/inventory/additem/${getPlayerId()}`, {
        itemId: itemId
      }).then(() => {
        console.log('Success');
      });
  
  }

  //Update head image
export const UpdateHeadImg = (hatId:string) => {

    Axios.post(`http://213.188.152.167:5000/equipped/sethat/${getPlayerId()}`, {
        hat: hatId
      }).then(() => {
        console.log('Success');
      });
}
//Update shirt image
export const UpdateShirtImg = (shirtId:string) => {

  Axios.post(`http://213.188.152.167:5000/equipped/setshirt/${getPlayerId()}`, {
      shirt: shirtId
    }).then(() => {
      console.log('Success');
    });
}
//Update pants image
export const UpdatePantsImg = (pantsId:string) => {

  Axios.post(`http://213.188.152.167:5000/equipped/setpants/${getPlayerId()}`, {
      pants: pantsId
    }).then(() => {
      console.log('Success');
    });
}
//Update shoes image
export const UpdateShoesImg = (shoesId:string) => {

  Axios.post(`http://213.188.152.167:5000/equipped/setshoes/${getPlayerId()}`, {
      shoes: shoesId
    }).then(() => {
      console.log('Success');
    });
}
//Update profile image

export const UpdateProfilePic = (pictureId:string) => {

 profilePic = pictureId;
}
//Fetch profile image
export const GetProfilePic = () => {

return profilePic;

}


//Function that buys an Item
export const buyItem = (numberCoins:number,itemId:string) => {

    //Makes sure that you have the coins for the purchase
    if(getCoins() >= numberCoins){
        //Calls function in PlayerData that removes the coins
        removeCoins(numberCoins);
        console.log('item bought');
        AddInventoryItem(itemId);
        return [true];
    }
    else{
        //You don't have the coins
        console.log('you*re poor');
        return [false];
    }
    
}
