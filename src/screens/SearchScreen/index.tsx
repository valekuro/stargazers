import React, {useState} from 'react';
import {useController, useForm} from 'react-hook-form';
import {SafeAreaView, View, Image, TextInput} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {IDataForm} from '../../interfaces/IDataForm';
import useValidationForm from './useValidationForm';
import useSearchScreen from './useSearchScreen';
import ErrorMessage from '../../components/ErrorMessage';
import searchScreenStyles, {dropdownStyle, inputStyles} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import SelectDropdown from 'react-native-select-dropdown';
import {theme} from '../../theme/theme';
import Button from '../../components/Button';
/**
 * SearchScreen component is the first screen with the form for the search.
 * @returns
 */
export default function SearchScreen(): JSX.Element {
  const [focusedUsername, setFocusedUsername] = useState<boolean>(false);
  //yup validation
  const {validationSchema} = useValidationForm();
  //react-hook-form
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
  } = useForm<IDataForm>({
    resolver: yupResolver(validationSchema),
  });
  //component logic
  const {onSubmit, starredRepoFromUser, networkError} = useSearchScreen(watch);
  //username input controller
  const {field} = useController({
    control,
    defaultValue: '',
    name: 'username',
  });
  return (
    <SafeAreaView style={searchScreenStyles.container}>
      <View>
        <Image
          source={require('../../../assets/images/githubstar.jpg')}
          style={searchScreenStyles.logo}
        />
        <ErrorMessage error={networkError} />
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          placeholder={'Insert username *'}
          placeholderTextColor={theme.colors.lightGray}
          style={
            inputStyles(
              focusedUsername ? theme.colors.blue : theme.colors.white,
            ).input
          }
          onFocus={() => setFocusedUsername(true)}
          onBlur={() => setFocusedUsername(false)}
        />
        <ErrorMessage error={errors.username?.message} />

        <SelectDropdown
          disabled={starredRepoFromUser.length === 0}
          defaultButtonText="Search repo here"
          search
          searchInputStyle={
            dropdownStyle(!!(starredRepoFromUser.length === 0))
              .dropdownSearchInputStyle
          }
          rowStyle={
            dropdownStyle(!!(starredRepoFromUser.length === 0)).dropdownRowStyle
          }
          buttonStyle={
            dropdownStyle(!!(starredRepoFromUser.length === 0))
              .dropdownButtonStyle
          }
          buttonTextStyle={
            dropdownStyle(!!(starredRepoFromUser.length === 0))
              .dropdownButtonTextStyle
          }
          rowTextStyle={
            dropdownStyle(!!(starredRepoFromUser.length === 0))
              .dropdownRowTextStyle
          }
          data={starredRepoFromUser}
          onSelect={selectedItem => {
            setValue('repository', selectedItem.name);
          }}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesomeIcon
                icon={isOpened ? faChevronUp : faChevronDown}
                color={
                  starredRepoFromUser.length === 0
                    ? theme.colors.lightGray
                    : theme.colors.white
                }
                size={18}
              />
            );
          }}
          searchPlaceHolder={'Search repo here'}
          dropdownIconPosition={'right'}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem.name;
          }}
          rowTextForSelection={item => {
            if (item.name) {
              return item.name;
            } else {
              return 'No repository for this user';
            }
          }}
        />
        <ErrorMessage error={errors.repository?.message} />
      </View>
      <Button
        label="Search"
        onPress={handleSubmit(onSubmit)}
        disabled={false}
      />
    </SafeAreaView>
  );
}
