import Axios from 'axios';
import conn from '../../constants/databaseAPI';

const APIaddress = conn.API.adress + conn.API.port;

/**
 * This function makes a request to the API which then makes a request to the database. It retrieves 
 * challenge-requests that the user recieved.
 * 
 * @author Gabriel
 * @param userId The user id of the person who the  challenge-requests belongs to. 
 * @returns An array of  challenge-requests belonging to the given user
 * @category API Requests
 */
export const getChallengeRequests = (userId: string) => {

    const request = APIaddress + '/challenges/request/' + userId;

    const dataPromise = Axios.get(request).then((response) => response.data)
    return dataPromise;
};

export const removeChallenge = (challengeId: string) => {

    const request = APIaddress + '/challenges/remove/' + challengeId;

    const dataPromise = Axios.delete(request).then((response) => response.data)
    return dataPromise;
};

export const updateChallenge = async (challengeId: string, status: string) => {
    const request = APIaddress + '/challenges/update/';
    Axios.put(request, { challId: challengeId, status: status }).then(() => {
        console.log('Ok')
    });
}
