//React
import { View, Text } from 'react-native';
//Style
import friendPageStyles from '../styles/FriendPage.style';

//FUNCTION: Displays a message  in the friend container why it could be empty 
const ErrorBanner = ({ inCase = false, title, extraTitle = "" }:
    { inCase?: boolean, title: string, extraTitle?: string }) => {
    return inCase ?
        <View style={friendPageStyles.errorMessageHolder}>
            < Text style={friendPageStyles.errorMessageText}>{extraTitle}</Text>
        </View>
        :
        <View style={friendPageStyles.errorMessageHolder}>
            <Text style={friendPageStyles.errorMessageText}>{title}</Text>
        </View>
}
export default ErrorBanner;