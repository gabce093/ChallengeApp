import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default function Authentication(userName,passWord) 

{
    
    
    fetch('http://213.188.152.167:5000/users/addfriend',
{
      method: 'POST',
     // mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       firsName: `${userName}`, 
       passWord: `${passWord}`
      })
 
})}
