import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {SafeAreaView, View, Image} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {IDataForm} from '../../interfaces/IDataForm';
import Input from '../../components/Input';
import useValidationForm from './useValidationForm';
import useSearchScreen from './useSearchScreen';
import ErrorMessage from '../../components/ErrorMessage';
import searchScreenStyles, {dropdownStyle} from './style';
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
  const {onSubmit, starredRepoFromUser, networkError, repositoryFromUser} =
    useSearchScreen();

  useEffect(() => {
    if (watch('username') && watch('username').length > 3) {
      repositoryFromUser(watch('username') || '');
    }
  }, [repositoryFromUser, watch]);
  return (
    <SafeAreaView style={searchScreenStyles.container}>
      <View>
        <Image
          source={require('../../../assets/images/githubstar.jpg')}
          style={searchScreenStyles.logo}
        />
        <ErrorMessage error={networkError} />
        <Input
          name="username"
          control={control}
          placeholder="Insert username *"
          onFocus={() => setFocusedUsername(true)}
          onBlur={() => setFocusedUsername(false)}
          focused={focusedUsername}
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
            return item.name;
          }}
        />
      </View>
      <Button
        label="Search"
        onPress={handleSubmit(onSubmit)}
        disabled={false}
      />
    </SafeAreaView>
  );
}
