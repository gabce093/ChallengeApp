import React, { useState } from "react";
import { RecyclerViewBackedScrollViewBase } from "react-native";

import {removeCoins, getCoins} from './PlayerData';

//Function that buys an Item
export const buyItem = (numberCoins: number) => {

    //Makes sure that you have the coins for the purchase
    if(getCoins()[0] >= numberCoins){
        //Calls function in PlayerData that removes the coins
        removeCoins(numberCoins);
        console.log('item bought');
    }
    else{
        //You don't have the coins
        console.log('you*re poor');
    }
    
}
