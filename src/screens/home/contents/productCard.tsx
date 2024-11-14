import { View, Text, StyleSheet, Image, Pressable, TextInput } from "react-native"
import { scale } from "react-native-size-matters"
import {
  useAppSelector, useAppDispatch

} from "../../../hooks/useAppDispatch"
import DefaultButton from "../../../components/defaultButton"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../../routes"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { addToCart } from "../../../redux/slices/cartSlice"
import { useCallback, useState } from "react"
import DefaultModal from "../../../components/defaultModal"


interface ProductCardProps {
  product: any
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { theme } = useAppSelector(state => state.theme)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const dispatch = useAppDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [quantity, setQuantity] = useState(1)

  useFocusEffect(
    useCallback(() => {
      setQuantity(1)
    }, [])
  )

  const handleAddToCart = () => {
    setModalVisible(false)
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, quantity, image: product.thumbnail }))
  }

  return (
    <View style={[styles.productCard, { backgroundColor: theme.backgroundColor }]}>
      <DefaultModal theme={theme} customButton={<DefaultButton color="blue" title="Add" onPress={handleAddToCart} />} content={<View>
        <Text style={{ color: theme.textColor, fontSize: scale(16), textAlign: 'center', marginBottom: scale(10) }}>Are you sure you want to add <Text style={{ fontWeight: 'bold' }}>{product.title}</Text> to the cart?</Text>
        <View style={{ marginVertical: scale(10) }}>
          <TextInput
            value={quantity.toString()}
            onChangeText={(text) => setQuantity(+text)}
            style={{ borderColor: theme.grayText, color: theme.textColor, borderWidth: 1, borderRadius: scale(5), padding: scale(5) }} placeholder="Quantity" keyboardType="numeric" />
        </View>
      </View>} visible={modalVisible} onRequestClose={() => setModalVisible(false)} />
      <Image source={{ uri: product?.thumbnail }} style={styles.productImage} resizeMode="contain" />
      <View style={styles.productInfo}>
        <Text numberOfLines={1} style={[styles.productTitle, { color: theme.textColor }]}>{product?.title}</Text>
        <Text numberOfLines={1} style={[styles.productPrice, { color: theme.textColor }]}>$ {product?.price}</Text>
        <View style={styles.productButton}>
          <View style={styles.productButtonItem}>
            <DefaultButton color="blue" title="Add to cart" onPress={() => setModalVisible(true)} />
          </View>
          <View style={styles.productButtonItem}>
            <DefaultButton onPress={() => navigation.navigate('DetailScreen', { id: +product.id })} title="View" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  productCard: {
    padding: scale(10),
    borderRadius: scale(10),
    flexDirection: "row",
    gap: scale(10),
    marginBottom: scale(10),
    alignItems: "center"
  },
  productImage: {
    width: "30%",
    height: scale(100),
    borderRadius: scale(10)
  },
  productTitle: {
    fontSize: scale(12)
  },
  productInfo: {
    width: "70%",
    gap: scale(5)
  },
  productPrice: {
    fontSize: scale(12)
  },
  productButton: {
    gap: scale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale(5)
  },
  productButtonItem: {
    width: "45%"
  }
})
