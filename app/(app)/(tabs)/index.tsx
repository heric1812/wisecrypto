import { StatusBar } from 'expo-status-bar'
import { Button, Container, Link, Separator, Text } from '../../../components'
import { Image, View } from 'react-native'
import { Routes } from '../../../constants/Routes'
import { useSession } from '../../../hooks/useSession'

const {
  login,
  register,
  dataTransactions,
  notifications,
  notificationSettings,
  paymentSettings,
  privacy,
} = Routes

export default function AppScreen() {
  const { signOut } = useSession()

  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Image source={{ uri: './../../assets/logo.png' }} style={{ width: 60, height: 40 }} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          marginVertical: 12,
        }}
      >
        <Link href={login.pathname}>{login.title}</Link>
        <Link href={register.pathname}>{register.title}</Link>
        <Button title="Log out" onPress={signOut} />
      </View>
      <Separator />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 12,
          marginVertical: 12,
        }}
      >
        <Link href={dataTransactions.pathname}>{dataTransactions.title}</Link>
        <Link href={notifications.pathname}>{notifications.title}</Link>
        <Link href={notificationSettings.pathname}>{notificationSettings.title}</Link>
        <Link href={paymentSettings.pathname}>{paymentSettings.title}</Link>
        <Link href={privacy.pathname}>{privacy.title}</Link>
      </View>
      <StatusBar style="auto" />
    </Container>
  )
}
