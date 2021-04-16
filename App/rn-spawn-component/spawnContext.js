import React, {createContext, useContext, useReducer} from 'react';
import {AddOsc} from '../tone/oscFunctions';

export const initialState = {
  spawnArray: [],
};

export const reducer = (state, action) => {
  const newSpawn = name => {
    let incSpawn = Number.isFinite(
      Math.max(...state.spawnArray.map(thing => thing[0])),
    )
      ? Math.max(...state.spawnArray.map(thing => thing[0])) + 1
      : 0;
    state.spawnArray.push([incSpawn, name]);
    const arraySpawn = [...state.spawnArray];
    /*  */
    AddOsc(incSpawn, name, '-Infinity');
    /*  */
    return state.spawnArray.length ? arraySpawn : [0, name];
  };

  const removeSpawn = removed => {
    const newArr = [...state.spawnArray];
    const del = [...newArr.map(thing => thing[0])];
    removed = del.indexOf(removed);
    newArr.splice(removed, 1);
    return newArr.length ? newArr : [];
  };

  const removeKind = name => {
    const swSpawn = state.spawnArray.filter(thing => !thing.includes(name));
    return swSpawn;
  };

  switch (action.type) {
    case 'KILL_ALL_SPAWN':
      return {
        spawnArray: [],
      };
    case 'NEW_SPAWN':
      return {
        spawnArray: newSpawn(action.name),
      };
    case 'REMOVE_SINGLE_SPAWN':
      return {
        spawnArray: removeSpawn(action.payload),
      };
    case 'REMOVE_NAME':
      return {
        spawnArray: removeKind(action.name),
      };
    default:
      return state;
  }
};

export const SpawnStateContext = createContext();

export const SpawnProvider = ({children}) => (
  <SpawnStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SpawnStateContext.Provider>
);

export const useSpawnArray = () => useContext(SpawnStateContext);
