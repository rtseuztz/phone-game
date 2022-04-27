import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as SecureStore from 'expo-secure-store'
import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid';
import { useEffect, useState } from 'react';
import * as user from '../firebase/user'
import Navigation from '../navigation';

export default function LoadingScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
    const [deviceID, setDeviceID] = useState<string>("")
    useEffect(() => {
        const getDeviceID = async () => {
            let uuid = uuidv4()           
            let fetchUUID = await SecureStore.getItemAsync('secure_deviceid');
            console.log("fetchuuid is " + fetchUUID)
            if (fetchUUID) {
              uuid = fetchUUID;
            } else {
              await SecureStore.setItemAsync('secure_deviceid', uuid)
            }
            setDeviceID(uuid)
            console.log(uuid);
            const currentUser = await user.getUser(uuid);
            console.log("current user is: " + currentUser);
            if (currentUser !== undefined) {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
              });
              //navigation.navigate('LoginScreen');
            } else {
                navigation.navigate('MainScreen')
            }
            //user.addUser(uuid)
        }
        getDeviceID();
    }, [])
    return (
        <View>
            <Text>Loading</Text>
        </View>
    )
}