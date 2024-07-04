import { Stack } from 'expo-router'
import { Routes } from '../../../constants/Routes'

export default function StackLayout() {
  const options = {
    headerTitleStyle: {
      fontFamily: 'Inter',
      fontSize: 18,
    },
    headerShadowVisible: false,
    headerTransparent: true,
  }

  return (
    <Stack>
      {/* <Stack.Screen
        name={Routes.login.name}
        options={{
          title: Routes.login.title,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.register.name}
        options={{
          title: Routes.register.title,
          headerShown: false,
        }}
      /> */}

      <Stack.Screen
        name={Routes.dataTransactions.name}
        options={{
          title: Routes.dataTransactions.title,
          ...options,
        }}
      />
      <Stack.Screen
        name={Routes.notifications.name}
        options={{
          title: Routes.notifications.title,
          ...options,
        }}
      />
      <Stack.Screen
        name={Routes.notificationSettings.name}
        options={{
          title: Routes.notificationSettings.title,
          ...options,
        }}
      />
      <Stack.Screen
        name={Routes.paymentSettings.name}
        options={{
          title: Routes.paymentSettings.title,
          ...options,
        }}
      />
      <Stack.Screen
        name={Routes.privacy.name}
        options={{
          title: Routes.privacy.title,
          ...options,
        }}
      />
    </Stack>
  )
}
