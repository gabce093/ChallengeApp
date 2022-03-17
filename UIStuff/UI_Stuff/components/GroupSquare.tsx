
import friendPageStyles from '../styles/FriendPage.style';
import {TouchableWithoutFeedback, Button ,Image, TouchableOpacity, TextStyle, Text, View, Pressable  } from 'react-native';


/** 
@param lvl The lvl of the group
@returns The groupsquate name of the group, icon and the challengebutton
@category Friendpage
*/
export default function GroupSquare(level:string, name:string) {
  
        
          //Pressable friend square that makes the modal pop up
          return(
           <TouchableOpacity  style={[friendPageStyles.item]} onPress = {() => console.log('icon square pressed')} > 
            <View  style={friendPageStyles.iconHolder}>
              <View  style= {friendPageStyles.lvlBadge}>

                {/* Text dispalying the level */}
                <Text style= {friendPageStyles.lvlText}>{level}</Text></View>
              
                {/* user icon for the friend */}
                <Image style={{ width: 90,
                  height: 90,
                  borderRadius: 100,
                  //overflow: "hidden",
                  borderWidth: 4,
                  borderColor: "#766449"}} 
                  source={require('../assets/images/emptyPlayerIcon.png')}
                />
                  
                </View>
                <View style={{marginTop: 4, backgroundColor: 'transparent', alignItems:'center'}}> 
                  {/* Show name of your friend */}
                  <Text style={[friendPageStyles.nameText]}>{name}</Text>
                  
                  {/* Button to challenge your friend */}
                  <Pressable style = {friendPageStyles.challengeButton} onPress={() => console.log('Pressed Challenge button')}>
                    <Text style = {friendPageStyles.challengeTxt}>Challenge!</Text>
                  </Pressable>
              </View>
      
            </TouchableOpacity>  
  
    );

    
}