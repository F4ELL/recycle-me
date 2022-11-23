import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens/Login'
import { SignUp } from '../screens/SignUp'
import { Occupation } from '../screens/Occupation'
import { HomeUser } from '../screens/HomeUser'
import { StatisticsUser } from '../screens/StatisticsUser'
import { HomeCollector } from '../screens/HomeCollector'
import { Points } from '../screens/Points'
import { StatisticsCollector } from '../screens/StatisticsCollector'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name='login'
                component={Login}
            />

            <Screen 
                name='signup'
                component={SignUp}
            />

            <Screen 
                name='occupation'
                component={Occupation}
            />

            <Screen 
                name='homeuser'
                component={HomeUser}
            />

            <Screen 
                name='statisticsuser'
                component={StatisticsUser}
            />

            <Screen 
                name='homecollector'
                component={HomeCollector}
            />

            <Screen 
                name='points'
                component={Points}
            />

            <Screen 
                name='statisticscollector'
                component={StatisticsCollector}
            />
        </Navigator>
    )
}

