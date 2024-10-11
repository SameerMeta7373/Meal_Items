import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function GridTile({title, color, onPress}: any) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 15,
    borderColor: '#000000',
    elevation: 6,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  text: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'black',
  },
});

export default GridTile;
