//import React, { useState } from "react";
//import { RecyclerViewBackedScrollViewBase } from "react-native";

import {removeCoins, getCoins,getPlayerId} from './PlayerData';
import Axios from "axios";

export const AddInventoryItem = (itemId:string) => {
       
    Axios.post(`http://213.188.152.167:5000/inventory/additem/${getPlayerId()}`, {
        itemId: itemId
      }).then(() => {
        console.log('Success');
      });
  
  }
export const UpdateHeadImg = (hatId:string) => {

    Axios.post(`http://213.188.152.167:5000/equipped/sethat/${getPlayerId()}`, {
        hat: hatId
      }).then(() => {
        console.log('Success');
      });
}

export const UpdateShirtImg = (shirtId:string) => {

  Axios.post(`http://213.188.152.167:5000/equipped/setshirt/${getPlayerId()}`, {
      shirt: shirtId
    }).then(() => {
      console.log('Success');
    });
}

export const UpdatePantsImg = (pantsId:string) => {

  Axios.post(`http://213.188.152.167:5000/equipped/setpants/${getPlayerId()}`, {
      pants: pantsId
    }).then(() => {
      console.log('Success');
    });
}
export const UpdateShoesImg = (shoesId:string) => {

  Axios.post(`http://213.188.152.167:5000/equipped/setshoes/${getPlayerId()}`, {
      shoes: shoesId
    }).then(() => {
      console.log('Success');
    });
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
