import { StyleSheet, View } from 'react-native'

export function Separator() {
  return <View style={styles.separator}></View>
}

const styles = StyleSheet.create({
  separator: {
    width: 200,
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomWidth: 1,
  },
})
