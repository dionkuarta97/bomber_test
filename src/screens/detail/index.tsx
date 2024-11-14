import { View, Text, Image, StyleSheet, TextInput } from "react-native"
import { useFocusEffect, useRoute } from "@react-navigation/native"
import useGetProductById from "../../hooks/useGetProdyctById"
import { scale } from "react-native-size-matters"
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch"
import DefaultButton from "../../components/defaultButton"
import { useCallback, useState } from "react"
import DefaultModal from "../../components/defaultModal"
import { addToCart } from "../../redux/slices/cartSlice"


const Detail = () => {
  const { id } = useRoute().params as { id: number }
  const { theme } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()
  const { data, } = useGetProductById(id)
  const [modalVisible, setModalVisible] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = useCallback(() => {

    dispatch(addToCart({ id: data?.id, title: data?.title, price: data?.price, quantity, image: data?.images[0] }))
    setModalVisible(false)
  }, [data, dispatch, quantity])

  useFocusEffect(
    useCallback(() => {
      setQuantity(1)
    }, [])
  )

  return <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
    <Image resizeMode='contain' source={{ uri: data?.images[0] }} style={styles.image} />
    <DefaultModal theme={theme}
      customButton={<DefaultButton color="blue" title="Add" onPress={handleAddToCart} />}
      content={
        <View style={styles.modalContent}>
          <Text style={[styles.title, { color: theme.textColor }]}>Quantity</Text>
          <TextInput
            style={[styles.input, { borderColor: theme.grayText, color: theme.textColor }]}
            placeholderTextColor={theme.grayText}
            placeholder="Quantity"
            keyboardType="numeric"
            value={quantity.toString() || ''}
            onChangeText={(text) => {
              if (text === '') {
                setQuantity(0)
              } else {
                setQuantity(parseInt(text))
              }
            }}
          />
        </View>
      } visible={modalVisible} onRequestClose={() => setModalVisible(false)} />
    <View style={styles.content}>
      <Text style={[styles.title, { color: theme.textColor }]}>{data?.title}</Text>
      <Text style={[styles.price, { color: theme.textColor }]}>$ {data?.price}</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>{data?.description}</Text>
      <View style={styles.buttonContainer}>
        <DefaultButton color="blue" title="Add to Cart" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  </View>
}

export default Detail

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: scale(200)
  },
  modalContent: {
    gap: scale(10)
  },
  input: {
    borderWidth: 1,
    borderRadius: scale(5),
    padding: scale(10)
  },
  container: {
    flex: 1,
    padding: scale(10)
  },
  content: {
    gap: scale(10),
    padding: scale(10)
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold'
  },
  price: {
    fontSize: scale(16),
  },
  description: {
    fontSize: scale(16)
  },
  buttonContainer: {
    marginTop: scale(10)
  }
})

