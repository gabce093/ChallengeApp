import React, { useState, useEffect, } from "react";

import { Box, FlatList, Center, NativeBaseProvider,  View, Button} from "native-base";




export default function GetUserlist()
{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const fetchData = async () => {
        
        const resp = await fetch("http://213.188.152.167:5000/users");
        const data = await resp.json();
        setData(data);
        setLoading(false);
    
      };
    
      
      useEffect(() => {
        fetchData();
      }, []);

  const renderItem = ({ item}:{item:any}) => {
   
    return (
        
        <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        {item.firstName}{item.lastName}</Box>
    );
  };
  
  return (

  
    data
    // <NativeBaseProvider>
      
    //   <Center flex={1}>
       
    //       {data && (
    //       <FlatList
    //         data={data}
    //         renderItem={renderItem}
    //         keyExtractor={(item) => item.id.toString()}
    //       />


    //     )}    
    //   </Center>
    // </NativeBaseProvider>


  );
}

