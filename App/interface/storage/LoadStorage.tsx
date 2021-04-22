import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSettings} from './useSettings';

export function LoadStorage() {
  const [{}, dispatch] = useSettings();
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
    if (rgb) {
      dispatch({
        type: 'RGB',
        prime: JSON.parse(rgb),
      });
    }
  }, [rgb]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
