// const API_URL = Constants?.expoConfig?.extra?.API_URL;
const API_URL = 'https://us-central1-donation-887a7.cloudfunctions.net/app';

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
    .catch((error) => console.error(error));
};

export { getEyesListByFilter, getEyesList };
