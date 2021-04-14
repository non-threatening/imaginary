<h1 align="center">Welcome to rn-spawn-component</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.11-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/non-threatening/rn-spawn-component#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/non-threatening/rn-spawn-component/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/non-threatening/rn-spawn-component/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/non-threatening/rn-spawn-component" />
  </a>
</p>

Clone and remove react-native components.

<!-- ### 🏠 [Homepage](https://github.com/non-threatening/rn-spawn-component#readme) -->

### ✨ [Demo](https://github.com/non-threatening/rnSpawnComponentDemo)

![Demo.gif](https://github.com/non-threatening/rnSpawnComponentDemo/blob/master/demo.gif?raw=true)

A complete demo with code examples can be found in this repo:
[https://github.com/non-threatening/rnSpawnComponentDemo](https://github.com/non-threatening/rnSpawnComponentDemo)

## Install

```sh
yarn add rn-spawn-component

or

npm i rn-spawn-component
```

## Usage

The SpawnProvider must wrap your App

```jsx
import {SpawnProvider, SpawnController, AddSpawn} from 'rn-spawn-component';

const App: () => React$Node = () => {
  function MyComponent() {
    return <Text>Hello World</Text>;
  }
  return (
    <SpawnProvider>
      <SpawnController spawn={<MyComponent />} name="myComponent" />
      <AddSpawn name="myComponent" label="Spawn Component" />
    </SpawnProvider>
  );
};
```

## API

### SpawnController

Place SpawnController where you would like your spawned Components to appear.

```jsx
import {SpawnController} from 'rn-spawn-component';
```

```jsx
<SpawnController spawn={<MyComponent />} name="myComponent" startCount={2} />
```

|   Props    |   Type    | Required | Description                                   |
| :--------: | :-------: | :------: | :-------------------------------------------- |
|   spawn    | Component |   true   | A single React Component                      |
|    name    |  string   |   true   | A unique name for each reproducible component |
| startCount |  number   | optional | Number to spawn on load                       |
---
### Drop in button components

All of the built in button components share the following props:
| Props | Type | Required | Description |
| :----: | :----: | :----: | :----------------------------------------------------- |
| label | string | optional | Button text |
| prepend | Component | optional | Prepend a Component to the inside of the button |
| append | Component | optional | Append a Component to the inside of the button |
| buttonColor | string | optional | Button color when not pressed |
| pressedColor | string | optional | Button color when pressed |
| style | style Object | optional | Custom Styling for the Button View |
| textStyle | style Object | optional | Custom Styling for the Label Text |
| android_ripple | [RippleConfig](https://reactnative.dev/docs/pressable#rippleconfig) | optional | Android only ripple effect |

#### AddSpawn

```jsx
import {AddSpawn} from 'rn-spawn-component';
```

```jsx
<AddSpawn name="myComponent" label="Spawn Component" prepend={<myIcon />} />
```

| Props |  Type  | Required | Description                                 |
| :---: | :----: | :------: | :------------------------------------------ |
| name  | string |   true   | Name of the SpawnController you wish to add |

#### ClearSpawns

Clears all spawned components sharing a name.

```jsx
import {ClearSpawns} from 'rn-spawn-component';
```

```jsx
<ClearSpawns name="myComponent" label="Clear Spawns" append={<myIcon />} />
```

| Props |  Type  | Required | Description                                              |
| :---: | :----: | :------: | :------------------------------------------------------- |
| name  | string |   true   | Name of the SpawnController components you wish to clear |

#### RemoveAll

Removes all spawned components of any name.

```jsx
import {RemoveAll} from 'rn-spawn-component';
```

```jsx
<RemoveAll label="Remove All" />
```

#### RemoveSpawn

Removes the spawned component it is inside of.

```jsx
import {RemoveSpawn} from 'rn-spawn-component';
```

```jsx
<RemoveSpawn spawn={spawnNumber} label={'Kill Me'} />
```

| Props |  Type  | Required | Description                                             |
| :---: | :----: | :------: | :------------------------------------------------------ |
| spawn | number |   true   | spawnNumber\* of the Component you would like to remove |

\*The spawnNumber is generated on creation. See myComponent.js below to see how to access the SpawnNumber.

```jsx
// myComponent.js
import React from 'react';
import {Text, View} from 'react-native';
import {RemoveSpawn} from 'rn-spawn-component';

export const MyComponent = (props) => {
  const spawnNum = props.spawnNumber;
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: 10,
        height: 80,
      }}>
      <View style={{alignItems: 'center'}}>
        <Text>spawnNumber: {spawnNum}</Text>
        <RemoveSpawn spawn={spawnNum} label={'Kill Me'} />
      </View>
    </View>
  );
};
```
---

### Functions can be called independently of the included buttons.

This must be within the scope of the SpawnProvider in a functional component.

```jsx
// import useSpawnArray
import {useSpawnArray} from './spawnContext';
```
```jsx
// declare the dispatch function in your component
const [{}, dispatch] = useSpawnArray();
```
```jsx
// name: The corresponding name of the SpawnController to add.
const add = (name) => {
  dispatch({type: 'NEW_SPAWN', name: name});
};

// spawnNumber: See myComponent.js example above
const remove = (spawnNumber) => {
  dispatch({type: 'REMOVE_SINGLE_SPAWN', payload: spawnNumber});
};

// name: The corresponding name of the SpawnControllers to remove.
const removeKind = (name) => {
  dispatch({type: 'REMOVE_NAME', name: name});
};

// Kill all Spawned components
const removeAll = () => {
  dispatch({type: 'KILL_ALL_SPAWN'});
};
```

## Author

👤 **non-threatening.com**

- Github: [@non-threatening](https://github.com/non-threatening)

## 📝 License

Copyright © 2020 [non-threatening.com](https://github.com/non-threatening)<br />
This project is [MIT](https://github.com/non-threatening/rn-spawn-component/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
