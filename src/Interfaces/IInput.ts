import {Control} from 'react-hook-form';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';

export interface IInput {
  name: string;
  control: Control<any, any>;
  placeholder: string;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
}
