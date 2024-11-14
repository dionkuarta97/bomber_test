import { View, Text, StyleSheet } from "react-native"
import { Theme } from "../../../theme"
import { scale } from "react-native-size-matters"


const SplashScreenContents = ({ theme }: { theme: Theme }) => {
  return <View>
    <Text style={[styles.text, { color: theme.textColor }]}>Splash Screen</Text>
  </View>
}

export default SplashScreenContents

const styles = StyleSheet.create({
  text: {
    fontSize: scale(20),
  },
})

