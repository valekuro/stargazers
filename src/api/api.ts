import axios from 'axios';
import {IDataForm} from '../interfaces/IDataForm';

const baseUrl = 'https://api.github.com/';

export const getStargazers = async ({username, repository}: IDataForm) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}repos/${username}/${repository}/stargazers`,
  };
  try {
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export const getUserRepository = async (username: string) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}users/${username}/repos`,
  };
  const response = await axios(configurationObject);
  return response.data;
};

export const getInformationsByUsername = async (userName: string) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}users/${userName}`,
  };
  const response = await axios(configurationObject);
  return response.data;
};
