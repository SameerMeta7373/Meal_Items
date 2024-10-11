import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {Pressable, StyleSheet} from 'react-native';

function IconButton({onPress, icon, color}: any) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Icons name={icon} size={24} color={color}></Icons>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
