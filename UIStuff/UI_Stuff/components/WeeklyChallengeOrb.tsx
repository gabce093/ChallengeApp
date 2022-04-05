import * as React from 'react';
import { ProgressBar } from 'react-native-paper';
import { Platform, StyleSheet, View } from 'react-native';
import styles2 from '../styles/Page.style';
import { Text, TextProps} from './Themed';
import { RadialGradient } from 'react-native-svg';

{/*Helper function*/}
const propStyle = (percent: number, base_degrees: number) => {
    const rotateBy = base_degrees + (percent * 3.6);
    return {
      transform:[{rotateZ: `${rotateBy}deg`}]
    };
}

{/*Helper function*/}
const renderThirdLayer = (percent: number) => {
    if(percent > 50){
      /**
      * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
      * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
      * before passing to the propStyle function
      **/
      return <View style={[styles.secondProgressLayer,propStyle((percent - 50), 45) ]}></View>
    }else{
      return <View style={styles.offsetLayer}></View>
    }
}

{/*The orb element containing the bar and text. Ignore the error on percent; it works*/}
const WeeklyChallengeOrb = ({percent}:{percent:any}) => {
    let firstProgressLayerStyle;

    if(percent > 50)
    {
        firstProgressLayerStyle = propStyle(50, -135);
    }else 
    {
        firstProgressLayerStyle = propStyle(percent, -135);
    }

    return(
        <View style={styles.orbContainer}>
            <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
            {renderThirdLayer(percent)}
            <View style={styles.textHolder}>
                <Text style={styles.title} >Weekly Challenge</Text>
                <Text style={styles.text}>{percent}%</Text>
            </View>
            {/*<View style={styles2.separator}>
               
               <Text style={styles.text}>Weekly Challenge:</Text>
                /*<ProgressBar  progress={10 / 50} color={"rgba(0, 255, 0, 1)"}/>            
                
            </View>*/}
                

        </View>
        

    );
}
{/*This is the stylesheet used by the weekly challenge orb*/}
const styles = StyleSheet.create({
    orbContainer: {
        shadowRadius: 20,
        shadowOpacity: 1,
        width: 202-50,
        height: 202-50,
        borderWidth: 12,
        borderRadius: 100,
        borderColor: '#151515',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#333333",
        zIndex: -1,
      },
      textHolder: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      firstProgressLayer: {
        width: 200-50,
        height: 200-50,
        borderWidth: 10,
        borderRadius: 100,
        position: 'absolute',
        borderLeftColor: 'rgba(0,0,0,0)',
        borderStartColor: "transparent",
        borderBottomColor: 'transparent',
        borderRightColor: '#43FF25',
        borderTopColor: '#43FF25',
        transform:[{rotateZ: '135deg'}],
        //135 standard
        zIndex: 4,
      },
      secondProgressLayer:{
        width: 200-50,
        height: 200-50,
        position: 'absolute',
        borderWidth: 10,
        borderRadius: 100,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#43FF25',
        borderTopColor: '#43FF25',
        transform: [{rotateZ: '45deg'}],
        zIndex: 6,
      },
      offsetLayer: {
        width: 202-50,
        height: 202-50,
        position: 'absolute',
        borderWidth: 12,
        borderRadius: 100,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#151515',
        borderTopColor: '#151515',
        transform:[{rotateZ: '-135deg'}], 
        //-135, standard
        zIndex: 5,
      },
      text: {
        fontSize: 40,
        color: "#C4C4C4",
        fontWeight: 'bold',
        alignItems: 'center',
      },
      title: {
        fontSize: 13,
        color: "#C4C4C4",
        fontWeight: 'bold',
        alignItems: 'center',
      },
});
export default WeeklyChallengeOrb;