import AsyncStorage from '@react-native-async-storage/async-storage';

const saveAnnoUserId = (userId: string) => {
  return AsyncStorage.setItem('annoUserId', userId);
};

const getAnnoUserId = () => {
  return AsyncStorage.getItem('annoUserId');
};

export { saveAnnoUserId, getAnnoUserId };
