import {StyleSheet, Text, View} from 'react-native';

function List({data=[]}: any) {
  console.log("==>" , data);
  
  return data.map((dataPoint : any) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint} </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 14,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#362d2d',
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default List;

