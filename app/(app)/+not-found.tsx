import { Stack } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import { Text, Link } from '../../components'
import { Routes } from '../../constants/Routes'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={{ fontWeight: '700' }}>This screen doesn't exist.</Text>
        <Link href={Routes.home.pathname} style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
