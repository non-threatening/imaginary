import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
const {Popover} = renderers;

import {useSpawnArray} from '../rn-spawn-component';
import {soloDispose} from '../tone';
import {Button} from '../interface/parts';
import {useSettings} from '../interface/storage';

interface knobMenuProps {
  menuOpened: boolean;
  setMenuOpened: any;
  spawnNum: number;
}

export const KnobMenu = ({
  menuOpened,
  setMenuOpened,
  spawnNum,
}: knobMenuProps) => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const [{prime}] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];

  return (
    <Menu
      name={spawnNum ? spawnNum.toString() : null}
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
          paddingVertical: 5,
        }}
      >
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
