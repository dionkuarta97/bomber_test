import { View, Text, Image, StyleSheet } from "react-native"
import { CartItem, removeFromCart } from "../../../redux/slices/cartSlice"
import { scale } from "react-native-size-matters"
import DefaultButton from "../../../components/defaultButton"
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch"


const CartCard = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector((state) => state.theme)
  return <View style={styles.container}>
    <Image resizeMode='contain' source={{ uri: item.image }} style={styles.image} />
    <View style={styles.content}>
      <Text numberOfLines={1} style={[styles.title, { color: theme.textColor }]}  >{item.title}</Text>
      <Text style={[styles.quantity, { color: theme.textColor }]}>Quantity: {item.quantity}</Text>
      <Text style={[styles.price, { color: theme.textColor }]}>Price: $ {item.price}</Text>
      <View style={styles.buttonContainer}>
        <DefaultButton color="red" title="Remove" onPress={() => dispatch(removeFromCart(item.id))} />
      </View>
    </View>
  </View>
}

export default CartCard

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: scale(100)
  },
  container: {
    padding: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10)
  },
  content: {
    width: '68%'
  },
  title: {
    fontSize: scale(14),
    fontWeight: 'bold'
  },
  quantity: {
    fontSize: scale(12),
  },
  price: {
    fontSize: scale(12),
  },
  buttonContainer: {
    width: '30%',
    alignSelf: 'flex-end',
    marginTop: scale(10)
  }
})

