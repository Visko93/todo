import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'
import { Home } from './src/screens/Home'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  })

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <View onLayout={onLayoutRootView}>
      <StatusBar style="light" translucent />
      <Home />
    </View>
  )
}
