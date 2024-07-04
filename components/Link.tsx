import type React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Link as LinkRouter } from 'expo-router'
import { LinkProps as LinkRouterProps } from 'expo-router/build/link/Link'

export type LinkProps = React.PropsWithChildren<LinkRouterProps & {}>

export function Link({ children, href, style, ...props }: LinkProps) {
  return (
    <LinkRouter {...props} href={href} style={[styles.link, style]}>
      {children}
    </LinkRouter>
  )
}

const styles = StyleSheet.create({
  link: {
    color: '#fff',
    // textDecorationColor: '#52a9ff',
    // textDecorationLine: 'underline',
    // textDecorationStyle: 'solid',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 4,
    backgroundColor: '#52a9ff',
  },
})
