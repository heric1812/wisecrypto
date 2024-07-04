import { StyleSheet, View, ViewProps } from 'react-native'

export type CardProps = ViewProps & {}

export function Card({ style, ...props }: CardProps) {
  return <View style={[styles.card, style]} {...props}></View>
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 8,
    margin: 8,
    backgroundColor: '#F4F4F4',
  },
})
