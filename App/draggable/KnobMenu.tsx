import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
const {Popover} = renderers;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSpawnArray} from '../rn-spawn-component';
import {soloDispose} from '../tone';
import {Button} from '../interface/parts';
import {useSettings} from '../interface/storage/useSettings';

export const KnobMenu = props => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const {menuOpened, setMenuOpened, spawnNum} = props;
  const [{prime}] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];

  return (
    <Menu
      name={spawnNum.toString()}
      onBackdropPress={() => setMenuOpened(!menuOpened)}
      opened={menuOpened}
      renderer={Popover}
      rendererProps={{
        anchorStyle: {
          backgroundColor: `rgba(${primeColor}, 0.2)`,
        },
      }}
    >
      <MenuTrigger style={styles.trigger} />
      <MenuOptions
        customStyles={optionsStyles}
        style={{
          backgroundColor: `rgba(${primeColor}, 0.2)`,
        }}
      >
        <MenuOption onSelect={() => setMenuOpened(!menuOpened)}>
          <Text>
            <Icon
              name={'close-box-outline'}
              size={32}
              color={`rgba(${primeColor}, 0.75)`}
            />
          </Text>
        </MenuOption>

        <MenuOption>
          <Button
            color={`rgba(${primeColor}, 0.75)`}
            text=" Remove"
            icon="trash-can-outline"
            onPress={() => removeKind()}
          />
        </MenuOption>
      </MenuOptions>
    </Menu>
  );

  function removeKind() {
    soloDispose(spawnNum);
    dispatchSpawn({type: 'REMOVE_SINGLE_SPAWN', payload: spawnNum});
  }
};

const styles = StyleSheet.create({
  trigger: {
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
});

const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  optionWrapper: {
    margin: 3,
  },
};
