import {
  StyleSheet,
  Text as TextNative,
  TextProps as TextNativeProps,
} from 'react-native'

export type TextProps = TextNativeProps & {}

export function Text({ style, ...props }: TextProps) {
  return <TextNative {...props} style={[styles.font, style]} />
}

const styles = StyleSheet.create({
  font: {
    fontWeight: '300',
    fontFamily: 'Inter',
  },
})
