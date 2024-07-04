import { useEffect, useState } from 'react'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { SessionProvider } from '../hooks/useSession'
// import Ionicons from '@expo/vector-icons/Ionicons'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function Root() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Light': require('./../assets/fonts/Inter/Inter-Light.ttf'),
    Inter: require('./../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./../assets/fonts/Inter/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./../assets/fonts/Inter/Inter-Bold.ttf'),
  })
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 4000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  useEffect(() => {
    async function isReady() {
      if (appIsReady && fontsLoaded && !fontError) {
        await SplashScreen.hideAsync()
      }
    }

    isReady()
  }, [appIsReady, fontsLoaded, fontError])

  if (!appIsReady && !fontsLoaded && !fontError) {
    return null
  }

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  )
}
