import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function LoadStorage() {
  const [rgb, setRgb] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem('@rgb');
        setRgb(jsonValue != null ? jsonValue : null);
      } catch (e) {
        console.warn(e);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    // setup a dispatch here ??
    if (rgb) {
      const {red, green, blue} = JSON.parse(rgb);
      console.log(red, green, blue);
    }
  }, [rgb]);

  return null;
}
