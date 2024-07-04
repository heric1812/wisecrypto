import Feather from '@expo/vector-icons/Feather'
import { Tabs } from 'expo-router'
import { Routes } from '../../../constants/Routes'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name={Routes.home.name}
        options={{
          title: Routes.home.title,
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.market.name}
        options={{
          title: Routes.market.title,
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="link" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.profile.name}
        options={{
          title: Routes.profile.title,
          tabBarIcon: ({ color }) => (
            <Feather size={24} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
