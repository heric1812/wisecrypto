import { View } from 'react-native'
import { Container, Link, Text } from '../../../components'
import { Routes } from '../../../constants/Routes'

const { home, market, profile } = Routes

export default function PrivacyScreen() {
  return (
    <Container>
      <Text>Privacy</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          marginVertical: 12,
        }}
      >
        <Link href={home.pathname}>{home.title}</Link>
        <Link href={market.pathname}>{market.title}</Link>
        <Link href={profile.pathname}>{profile.title}</Link>
      </View>
    </Container>
  )
}
