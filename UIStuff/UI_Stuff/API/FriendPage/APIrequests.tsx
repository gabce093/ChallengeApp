import Axios, { AxiosResponse } from 'axios';
import { SetStateAction, useState } from 'react';

import conn from '../../constants/databaseAPI';

const APIaddress = conn.API.adress + conn.API.port;

export const searchUser = (user: string, searchWord: string) => {
    console.log(APIaddress + '/users/' + `${user}` + '/' + `${searchWord}`)
    const request = APIaddress + '/users/' + `${user}` + '/' + `${searchWord}`;

    const dataPromise = Axios.get(request).then((response) => response.data)
    return dataPromise;
};






