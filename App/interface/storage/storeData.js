import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  // console.log(`storeData: ${key}, ${JSON.stringify(value)}`);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.warn(e);
  }
};
