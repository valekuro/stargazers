import React from 'react';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, TouchableOpacity} from 'react-native';
import Input from '../Input';
import {IInputSelect} from './IInputSelect';

export default function InputSelect({
  control,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  focused,
  onPressArrow,
  isResultOpen,
  disabled,
  name,
}: IInputSelect): JSX.Element {
  return (
    <View style={{position: 'relative'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Input
          name={name}
          control={control}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          focused={focused}
          disabled={disabled}
        />
        <TouchableOpacity onPress={onPressArrow}>
          <FontAwesomeIcon
            style={{color: '#FFF'}}
            icon={isResultOpen ? faChevronUp : faChevronDown}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

{
  /*  <InputSelect
          control={control}
          placeholder="Insert project name *"
          onChange={() => repositoryFromUser(getValues('username') || '')}
          onBlur={() => setFocusedRepository(false)}
          onFocus={() => setFocusedRepository(true)}
          focused={focusedRepository}
          onPressArrow={() => setOpenRepoList(!openRepoList)}
          isResultOpen={openRepoList}
          disabled={false}
          name={'repository'}
        /> */
}
