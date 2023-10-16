import axios from 'axios';
import {IDataForm} from '../Interfaces/IDataForm';

const baseUrl = 'https://api.github.com/';

export const getByUserAndProject = async ({
  username,
  repository,
}: IDataForm) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}repos/${username}/${repository}/stargazers`,
  };
  const response = await axios(configurationObject);
  return response.data;
};

export const getAllUsers = async () => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}users`,
  };
  const response = await axios(configurationObject);
  return response.data;
};

export const getStarredByUser = async (username: string) => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}users/${username}/starred`,
  };
  const response = await axios(configurationObject);
  return response.data;
};
