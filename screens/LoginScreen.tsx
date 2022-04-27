import { StyleSheet, Image} from "react-native";
import { RootTabScreenProps } from "../types";
import {Text, View, TextInput} from '../components/Themed'
import { AutoFocus } from "expo-camera/build/Camera.types";

export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <Image
            source={require('../assets/images/feet.png')}
            resizeMode={"contain"}
            style={styles.logo}
            >
            </Image>
            <Text
            style={styles.title}
            lightColor="rgba(0,0,0,0.7)"
            darkColor="rgba(255,255,255,0.7)">
            Welcome
            </Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your name here..."
            editable
            maxLength={20}
            keyboardType="default">
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%'
    },
    title: {
        fontSize: 96,
        textAlign: 'center',
    },
    logo: {
        height: 100,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
      },
      input: {
        height: '10%',
        margin: 12,
        padding: 10,
        fontSize: 24
      },
});