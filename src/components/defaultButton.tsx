import { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import { scale } from "react-native-size-matters"
import { RootState } from "../redux"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../hooks/useAppDispatch"


interface DefaultButtonProps {
  title: string,
  color?: "red" | "green" | "blue" | "black",
  onPress?: () => void
}

export const DefaultButton = ({ title, color = "green", onPress }: DefaultButtonProps) => {
  const dispatch = useAppDispatch()
  const { theme, isDark } = useSelector((state: RootState) => state.theme)
  const [buttonColor, setButtonColor] = useState(
    color === "red" ? theme.redButton : color === "green" ? theme.greenButton : color === 'black' ? theme.black : theme.blueButton
  )



  useEffect(() => {
    setButtonColor(color === "red" ? theme.redButton : color === "green" ? theme.greenButton : color === 'black' ? theme.black : theme.blueButton)
  }, [color, theme])

  return <Pressable
    onPress={onPress}
    style={({ pressed }) => [styles.button, {
      backgroundColor: !isDark ? buttonColor : theme.backgroundColor,
      borderWidth: isDark ? 1.2 : 0,
      borderColor: color === 'black' ? theme.white : buttonColor,
      transform: [{ scale: pressed ? 0.95 : 1 }]
    }]}
  >
    <Text style={{ color: theme.white }}>{title}</Text>
  </Pressable>
}

export default DefaultButton


const styles = StyleSheet.create({
  button: {
    padding: scale(10),
    borderRadius: scale(10),
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: scale(16),
    fontWeight: 'bold'
  }
})
