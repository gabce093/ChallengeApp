//React
import { Text, View, ImageBackground } from 'react-native';
//Styles
import styles from '../styles/Page.style';
import profilePageStyle from '../styles/ProfilePage.style';
//Components
import UserIconLarge from '../components/UserIconLarge';
//function
import { calculateLevel } from '../PlayerData'
//linking
import { RootStackScreenProps } from '../types';

export default function ProfilePage({ route, navigation }: { route: any, navigation: RootStackScreenProps<'ProfilePage'> }) {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={[styles.forestBackground,
            { justifyContent: 'flex-start', alignItems: 'center' }]} source={require('../assets/images/forest.png')}>

                <View style={profilePageStyle.userInfoContainer}>
                    <UserIconLarge level={calculateLevel(route.params.expAmount)} />
                    <Text style={[styles.title, { color: 'white' }]}>{route.params.userName}s profile page</Text>
                </View>


            </ImageBackground>
        </View >
    );
}