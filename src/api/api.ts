import axios from 'axios';
import {IDataForm} from '../interfaces/IDataForm';

const baseUrl = 'https://api.github.com/';

export const getStargazers = async ({username, repository}: IDataForm) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}repos/${username}/${repository}/stargazers`,
  };
  const response = await axios(configurationObject);
  return response.data;
};

export const getUserRepository = async (username: string) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}users/${username}/repos`,
  };
  const response = await axios(configurationObject);
  return response.data;
};
