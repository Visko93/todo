import * as React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { theme } from '../../styles/theme'

interface InputProps extends TextInputProps {
  value: string
  onChangeText: (text: string) => void
}

export function Input({ value, onChangeText, ...rest }: InputProps) {
  return <TextInput value={value} onChangeText={onChangeText} {...rest} />
}
