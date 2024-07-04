import { View } from 'react-native'
import { Button, Container, Link, Separator, Text } from '../components'
import { Routes } from '../constants/Routes'
import { useSession } from '../hooks/useSession'

const { register, home, market, profile } = Routes

export default function LoginScreen() {
  const { signIn } = useSession()

  return (
    <Container>
      <Text>Login</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          marginVertical: 12,
        }}
      >
        <Link href={register.pathname}>{register.title}</Link>
        <Link href={home.pathname}>{home.title}</Link>
        <Link href={market.pathname}>{market.title}</Link>
        <Link href={profile.pathname}>{profile.title}</Link>
      </View>
      <Separator />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          marginVertical: 12,
        }}
      >
        <Button title='Iniciar sesion' onPress={signIn} />
      </View>
    </Container>
  )
}
