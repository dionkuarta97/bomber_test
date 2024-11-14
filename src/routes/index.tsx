import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useLoadPersistedState } from '../hooks/useLoadPersistedState'
import DefaultHeader from '../components/defaultHeader'
import SplashScreen from '../screens/splashScreen'
import HomeScreen from '../screens/home'
import Detail from '../screens/detail'
import Cart from '../screens/cart'

const Stack = createNativeStackNavigator()


export type RootStackParamList = {
  SplashScreen: undefined
  HomeScreen: undefined
  DetailScreen: { id: number }
  CartScreen: undefined
}

const Routes = () => {
  useLoadPersistedState()

  return <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
    <Stack.Screen options={{ header: () => <DefaultHeader backButton={false} /> }} name="HomeScreen" component={HomeScreen} />
    <Stack.Screen options={{ header: () => <DefaultHeader /> }} name="DetailScreen" component={Detail} />
    <Stack.Screen options={{ header: () => <DefaultHeader /> }} name="CartScreen" component={Cart} />
  </Stack.Navigator>
}

export default Routes
