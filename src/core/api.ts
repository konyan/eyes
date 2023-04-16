import Constants from 'expo-constants';

const API_URL = Constants?.expoConfig?.extra?.API_URL;

const getEyesListByFilter = async (filter: number) => {
  try {
    const response = await fetch(`${API_URL}/eyes/filter?type=${filter}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
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
