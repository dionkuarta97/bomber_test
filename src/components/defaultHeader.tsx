import { View, Text, StyleSheet } from "react-native"
import { DefaultButton } from "./defaultButton"
import { useSelector } from "react-redux"
import { RootState } from "../redux"
import { scale } from "react-native-size-matters"
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch"
import { toggleTheme } from "../redux/slices/themeSlice"
import { RootStackParamList } from "../routes"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"


export const DefaultHeader = ({ backButton = true }: { backButton?: boolean }) => {
  const { theme, isDark } = useSelector((state: RootState) => state.theme)
  const { items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  console.log(items)

  return <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>

    <View style={styles.backButtonContainer}>
      {backButton && <DefaultButton onPress={() => navigation.goBack()} color='red' title='Back' />}
    </View>
    <View style={styles.buttonContainer}>
      {items.length > 0 && <View style={styles.cartContainer}>
        <Text style={{ color: theme.white }}>{items.length}</Text>
      </View>}
      <DefaultButton onPress={() => navigation.navigate('CartScreen')} color='blue' title='Cart' />
    </View>
    <View style={styles.buttonContainer}>
      <DefaultButton onPress={() => dispatch(toggleTheme())} color='black' title={!isDark ? 'Light Mode' : 'Dark Mode'} />
    </View>
  </View>
}

export default DefaultHeader


const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonContainer: {
    width: 'auto',
    marginRight: 'auto'
  },
  buttonContainer: {
    width: 'auto',
    marginHorizontal: scale(5)
  },
  cartContainer: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: scale(-6),
    top: scale(-8),
    zIndex: 1000
  }
})
