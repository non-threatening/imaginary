import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSettings} from './useSettings';

export function LoadStorage() {
  const [{}, dispatch] = useSettings();
  const [values, setValues] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const things = await AsyncStorage.multiGet(['@rgb', '@range']);
        setValues(things);
      } catch (e) {
        console.warn(e);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (values) {
      dispatch({
        type: 'RGB',
        prime: JSON.parse(values[0][1]),
      });
      dispatch({
        type: 'RANGE',
        range: JSON.parse(values[1][1]),
      });
    }
  }, [values]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
