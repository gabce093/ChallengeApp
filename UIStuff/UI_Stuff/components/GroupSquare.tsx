
import friendPageStyles from '../styles/FriendPage.style';
import {Modal,Alert, Button ,Image, TouchableOpacity, TextStyle, FlatList  } from 'react-native';
import { Text, View} from '../components/Themed';

/** 
@param lvl The lvl of the group
@returns The groupsquate name of the group, icon and the challengebutton
@category Friendpage
*/
export function GroupSquare(lvl:string) {
    const Item = ({ item, onPress, backgroundColor, textColor }
        :{item:any, backgroundColor:any, textColor:TextStyle, onPress:any}) => (

        <TouchableOpacity onPress={onPress} style={[friendPageStyles.item, backgroundColor]}>
            <View style={friendPageStyles.iconHolder}>
              <Image style={{ width: '25vw',
                height: '25vw',
                borderRadius: 100,
                overflow: "hidden",
                borderWidth: 5,
                borderColor: "#766449"}} 
                source={require('../assets/images/emptyPlayerIcon.png')}
                 />
              <Text style= {friendPageStyles.lvlBadge}>lvl {lvl}</Text>
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