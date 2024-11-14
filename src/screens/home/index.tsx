import { View, Text, StyleSheet } from "react-native"
import { RootState } from "../../redux"
import { useSelector } from "react-redux"
import HomeTab from "./contents/homeTab"
export const HomeScreen = () => {
  const { theme } = useSelector((state: RootState) => state.theme)

  return <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <HomeTab />
  </View>
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
