import {AxiosError, AxiosResponse} from 'axios';

const messageError = (error: AxiosError) => {
  // The request was made and the server responded with a status code
  // that falls out of the range of 2xx
  if (error.response) {
    return `Something went wrong: ${error.response.status} - ${
      (error.response as AxiosResponse)?.data.message
    }`;
  }
  // The request was made but no response was received
  // `error.request` is an instance of XMLHttpRequest in the
  // browser and an instance of
  // http.ClientRequest in node.js
  if (error.request) {
    return `Something went wrong, generic error: ${error.message}`;
  }
};

export default messageError;
