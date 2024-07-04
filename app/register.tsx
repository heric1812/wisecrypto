import { View } from 'react-native'
import { Container, Link, Text } from '../components'
import { Routes } from '../constants/Routes'

const { login, home, market, profile } = Routes

export default function RegisterScreen() {
  return (
    <Container>
      <Text>Register</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          marginVertical: 12,
        }}
      >
        <Link href={login.pathname}>{login.title}</Link>
        <Link href={home.pathname}>{home.title}</Link>
        <Link href={market.pathname}>{market.title}</Link>
        <Link href={profile.pathname}>{profile.title}</Link>
      </View>
    </Container>
  )
}
