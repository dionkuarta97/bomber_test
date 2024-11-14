import { Modal, View, Text, StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"
import { Theme } from "../theme"
import DefaultButton from "./defaultButton"


const DefaultModal = ({
  customButton,
  visible, onRequestClose = () => { }, theme, content }: {
    visible: boolean, onRequestClose: () => void, theme: Theme,
    content: React.ReactNode, customButton?: React.ReactNode
  }) => {
  return <Modal visible={visible}
    onRequestClose={onRequestClose}
    transparent={true}
    animationType="fade" >
    <View style={[styles.background, { backgroundColor: theme.backgroundColor === '#fff' ? theme.black : theme.white }]} />
    <View style={styles.container}>
      <View style={[styles.content, { backgroundColor: theme.backgroundColor }]}>
        {content}
      </View>
      <View style={[styles.buttonContainer, { backgroundColor: theme.backgroundColor }]}>
        {customButton && customButton}
        <DefaultButton color="red" title="Close" onPress={onRequestClose} />
      </View>
    </View>
  </Modal>
}

export default DefaultModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(20)
  },
  background: {
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  content: {
    width: '100%',
    padding: scale(20), borderTopRightRadius: scale(10), borderTopLeftRadius: scale(10)
  },
  buttonContainer: {
    gap: scale(10),
    flexDirection: 'row',
    width: '100%',
    padding: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: scale(10),
    borderBottomLeftRadius: scale(10)
  }
})    
