
import friendPageStyles from '../styles/FriendPage.style';
import {TouchableWithoutFeedback, Button ,Image, TouchableOpacity, TextStyle, Text, View  } from 'react-native';


/** 
@param lvl The lvl of the group
@returns The groupsquate name of the group, icon and the challengebutton
@category Friendpage
*/
export function GroupSquare(lvl:string) {
    const Item = ({ item, onPress, backgroundColor, textColor }
        :{item:any, backgroundColor:any, textColor:TextStyle, onPress:any}) => (
       
         <TouchableOpacity onPress={onPress} style={[friendPageStyles.item, backgroundColor]}> 
            <View onStartShouldSetResponder={() => true} style={friendPageStyles.iconHolder}>
              <View  style= {friendPageStyles.lvlBadge}><Text style= {friendPageStyles.lvlText}>lvl {lvl}</Text></View>
              <Image style={{ width: '25vw',
                height: '25vw',
                borderRadius: 100,
                overflow: "hidden",
                borderWidth: 5,
                borderColor: "#766449"}} 
                source={require('../assets/images/emptyPlayerIcon.png')}
                 />
              
            </View>
            <View style={{marginTop: '4vw', backgroundColor: 'transparent', alignItems:'center'}}> 
              <Text style={[friendPageStyles.nameText, textColor]}>{item.title}</Text>
              <Button onPress={() => console.log('Pressed Challenge button')}
                title="Challenge!" 
                color={'#ff5c00'}
                />
           </View>
      
      </TouchableOpacity>  
  
      );

      return Item;
}