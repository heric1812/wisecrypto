import { ScrollView, StyleSheet, View, ViewProps } from 'react-native'
import Constants from 'expo-constants'

type ContainerProps = ViewProps & {}

export function Container({ style, children, ...props }: ContainerProps) {
  return (
    <ScrollView style={styles.scroll}>
      <View {...props} style={[styles.container, style]}>
        {children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    // backgroundColor: '#BEBEBE',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
