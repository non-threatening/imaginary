import React, {createContext, useContext, useReducer} from 'react';

export const initialSettings = {
  prime: {red: 0, green: 255, blue: 255, alpha: 1},
  range: [100, 700],
};

export const SettingsReducer = (state, action) => {
  console.log(`useSettings: ${JSON.stringify(action)}`);
  switch (action.type) {
    case 'RGB':
      return {
        ...state,
        prime: action.prime,
      };
    case 'RANGE':
      return {
        ...state,
        range: action.range,
      };
    default:
      return state;
  }
};

export const SettingsContext = createContext();

// eslint-disable-next-line no-shadow
export const SettingsProvider = ({SettingsReducer, children}) => (
  <SettingsContext.Provider
    value={useReducer(SettingsReducer, initialSettings)}
  >
    {children}
  </SettingsContext.Provider>
);

export const useSettings = () => useContext(SettingsContext);
