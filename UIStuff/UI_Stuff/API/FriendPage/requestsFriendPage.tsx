import Axios, { AxiosResponse } from 'axios';
import { SetStateAction, useState } from 'react';

import conn from '../../constants/databaseAPI';

const APIaddress = conn.API.adress + conn.API.port;


/**
 * This function makes a request to the API which then makes a request to the database. It was 
 * created to search for friends to be added to the users friendlist.
 * You can only search for names with this function, it does not work for id:s.
 * 
 * @author Gabriel
 * @param userId The user id of the person doing the search. 
 * @param searchWord The word the user types in as the search
 * @returns Returns an array of users based on the search word
 */
export const searchUser = (userId: string, searchWord: string) => {
    const request = APIaddress + '/users' + '/search/' + `${userId}` + '/' + `${searchWord}`;

    const dataPromise = Axios.get(request).then((response) => response.data)
    return dataPromise;
};

/**
 * This function makes a request to the API which then makes a request to the database. 
 * It retrieves the friends of the user.
 * 
 * @author Gabriel
 * @param userId The user id of the person whos friends you want to find. 
 * @returns Returns an array of friends based on the userId
 */
export const getFriends = (userId: string) => {
    console.log("Logged in as: " + userId)
    const request = APIaddress + '/friends/' + userId;

    const dataPromise = Axios.get(request).then((response) => response.data)
    return dataPromise;
};


/**
 * This function makes a request to the API which then makes a request to the database. 
 * It creates a relation between two people in the friends-table in the database with status 2=(pending request). 
 * 
 * @author Gabriel
 * @param fromUserId The user id of the person who sends the friend-request. 
 * @param toUserId The user id of the person who recieves the friend-request. 
 */
export const sendFriendRequest = (fromUserId: string, toUserId: string) => {
    console.log(fromUserId + ' added ' + toUserId);

    Axios.post(APIaddress + '/friends/create', {
        from: fromUserId,
        to: toUserId,
    }).then(() => {
        console.log('Success, friend requset created');
    });
};

/**
 * This function makes a request to the API which then makes a request to the database. 
 * It deletes a relation between to people in the friends-table in the database. It is
 * used in the friendpage to remove a friend.
 * 
 * @author Gabriel
 * @param relationId The user id of the person who sends the friend-request. 
 */
export const removeFriend = (relationId: string) => {

    Axios.delete(APIaddress + `/friends/remove/${relationId}`).then((response) => {
        console.log('Deleted!')
    })
}




