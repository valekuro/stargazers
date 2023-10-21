import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IOwner} from '../interfaces/IApi';
import {IDataForm} from '../interfaces/IDataForm';

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
