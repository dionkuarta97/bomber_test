import { View, StyleSheet } from "react-native"
import SplashScreenContents from "./contents"
import { useAppSelector } from "../../hooks/useAppDispatch"
import { useEffect } from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../routes"



const SplashScreen = () => {
  const { theme } = useAppSelector(state => state.theme)
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] })
    }, 2000)
  }, [])

  return <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <SplashScreenContents theme={theme} />
  </View>
}

export default SplashScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
