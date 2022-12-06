import * as Location from 'expo-location'
import { Alert } from 'react-native'

export async function getLocationUser() {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if(status !== 'granted') {
        Alert.alert('Permissão para acessar localização negada!')
        return
    } 

    const location = await Location.getCurrentPositionAsync({})
    return location
}