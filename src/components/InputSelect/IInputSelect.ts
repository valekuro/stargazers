import {IInput} from '../Input/IInput';

export interface IInputSelect extends IInput {
  onPressArrow: ()=>void;
  isResultOpen: boolean;
}
