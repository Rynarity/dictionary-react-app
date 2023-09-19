import axios from 'axios';

export const dictionaryCall = async (word) => {
  return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
};
