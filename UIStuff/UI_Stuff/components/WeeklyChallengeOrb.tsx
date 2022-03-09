import * as React from 'react';
import { ProgressBar } from 'react-native-paper';
import styles from '../styles/TopBar.style';
import styles2 from '../styles/Page.style';
import { Text, TextProps, View } from './Themed';

const WeeklyChallengeOrb = () => {
    return(
        <View style={styles2.separator}>
                <Text style={styles.title}>Weekly Challenge:</Text>
                <ProgressBar  progress={10 / 50} color={"rgba(0, 255, 0, 1)"}/>
        </View>

    );
}

export default WeeklyChallengeOrb;