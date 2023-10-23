import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ResultScreen from '../../screens/ResultScreen';
import SearchScreen from '../../screens/SearchScreen';
import {theme} from '../../theme/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/RootStackParamList';
import navStyle from './style';
const Stack = createNativeStackNavigator<RootStackParamList>();
/**
 * Navigation component
 * @returns
 */
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SearchScreen"
        screenOptions={{
          contentStyle: navStyle.contentStyle,
        }}>
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{
            headerShown: true,
            title: ' ',
            headerTintColor: theme.colors.white,
            headerStyle: navStyle.headerStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
