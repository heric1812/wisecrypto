import {
  Button as ButtonNative,
  type ButtonProps as ButtonNativeProps,
  StyleSheet,
} from 'react-native'

export type ButtonProps = ButtonNativeProps & {
  style?: any
}

export function Button({ style, ...props }: ButtonProps) {
  return <ButtonNative {...props} />
}

const styles = StyleSheet.create({
  button: {},
})
