import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IOwner} from '../interfaces/IApi';
import {IDataForm} from '../interfaces/IDataForm';
/**
 * Here you can find all navigation types/interfaces
 */
export type RootStackParamList = {
  App: undefined;
  SearchScreen: undefined;
  ResultScreen: IRouteResultScreen;
};

export interface IRouteResultScreen {
  data: IOwner[];
  dataSearch: IDataForm;
}
export type TResultScreen = NativeStackScreenProps<
  RootStackParamList,
  'ResultScreen'
>;
