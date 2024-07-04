import { Dispatch } from 'react'
import {
  Modal as ModalNative,
  StyleSheet,
  Alert,
  View,
  Pressable,
} from 'react-native'
import { Text } from './Text'

export type ModalProps = {
  visible: boolean
  setVisible: Dispatch<boolean>
}

export function Modal({ visible, setVisible }: ModalProps) {
  return (
    <ModalNative
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
        setVisible(!visible)
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setVisible(!visible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </ModalNative>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    top: '20%',
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    padding: 35,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
