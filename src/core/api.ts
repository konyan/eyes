import Constants from 'expo-constants';

const API_URL = Constants?.expoConfig?.extra?.API_URL;

const getEyesListByFilter = async (filter: string) => {
  const response = await fetch(`${API_URL}/eyes?filter=${filter}`);
  return response.json();
};

const getEyesList = () => {
  return fetch(`${API_URL}/eyes`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => console.log(error));
};

export { getEyesListByFilter, getEyesList };
