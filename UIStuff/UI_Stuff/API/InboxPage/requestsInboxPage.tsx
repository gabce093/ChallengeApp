import Axios from 'axios';
import conn from '../../constants/databaseAPI';

const APIaddress = conn.API.adress + conn.API.port;


/**
 * This function makes a request to the API which then makes a request to the database. It retrieves 
 * friendrequests that the user recieved. It is used in the InboxPage to retrieve friendrequests.
 * 
 * @author Gabriel
 * @param userId The user id of the person who the friend-request belongs to. 
 * @returns An array of friendrequests belonging to the given user
 * @category API Requests
 */
export const getFriendRequests = (userId: string) => {
    console.log("Logged in as: " + userId)
    const request = APIaddress + '/friends/request/' + userId;

    const dataPromise = Axios.get(request).then((response) => response.data)
    return dataPromise;
};

/**
 * This function makes a request to the API which then makes a request to the database. It changes
 * the status of a relation from 2(pending request) to 1(friends).
 * 
 * @author Gabriel
 * @param relationId The id of the relation in the friendtable in the database 
 * @category API Requests
 */
export const acceptRequest = async (relationId: string) => {
    const request = APIaddress + '/friends/accept/request';
    Axios.put(request, { relId: relationId }).then(() => {
        console.log('Accepted')
    });
}

/**
 * This function makes a request to the API which then makes a request to the database. It changes
 * the status of a relation from 2(pending request) to 3(request declined).
 * 
 * @author Gabriel
 * @param relationId The id of the relation in the friendtable in the database 
 * @category API Requests
 */
export const declineRequest = async (relationId: string) => {
    const request = APIaddress + '/friends/decline/request';
    Axios.put(request, { relId: relationId }).then(() => {
        console.log("Declined")
    });
}