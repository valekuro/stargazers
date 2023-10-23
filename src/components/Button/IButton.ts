import {GestureResponderEvent} from 'react-native';

/**
 * Button interface
 */
export interface IButton {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled: boolean;
}
