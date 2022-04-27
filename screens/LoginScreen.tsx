import { StyleSheet } from "react-native";
import { RootTabScreenProps } from "../types";
import {Text, View} from '../components/Themed'

export default function LoginScreen() {

    return (
        <View>
            <Text
             style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
             darkColor="rgba(255,255,255,0.8)">
            Welcome
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
      },
});