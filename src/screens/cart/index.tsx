import { StyleSheet, View, Text, ScrollView } from "react-native"
import { useAppSelector } from "../../hooks/useAppDispatch"
import CartCard from "./contents/cartCard"
import { useMemo } from "react"
import { scale } from "react-native-size-matters"


const Cart = () => {
  const { theme } = useAppSelector((state) => state.theme)
  const { items } = useAppSelector((state) => state.cart)
  const totalPrice = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }, [items])
  const totalQuantity = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0)
  }, [items])
  return (
    <View style={{ ...styles.container, backgroundColor: theme.backgroundColor }}>
      <ScrollView>
        {items.map((item) => (
          <CartCard item={item} />
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: scale(10) }}>
          <Text style={{ color: theme.textColor, fontSize: scale(16), marginRight: 'auto' }}>Total</Text>
          <Text style={{ color: theme.textColor, fontSize: scale(16), }}>$ {totalPrice.toFixed(2)}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: scale(10) }}>
          <Text style={{ color: theme.textColor, fontSize: scale(16), marginRight: 'auto' }}>Quantity</Text>
          <Text style={{ color: theme.textColor, fontSize: scale(16), }}>{totalQuantity}</Text>
        </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  totalContainer: {
    padding: scale(10),
  }
})

