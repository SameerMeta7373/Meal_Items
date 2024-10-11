import {View, Text, StyleSheet} from 'react-native';

function MealDetail({duration, complexity, affordability}: any) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItems}>{duration} m  ― </Text>
      <Text style={styles.detailItems}>{complexity}  ― </Text>
      <Text style={styles.detailItems}>{affordability}  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignSelf: 'center',
    marginBottom: 14,
    borderWidth: 2,
    width: 250,
    borderColor: 'black',
    justifyContent: 'space-evenly',
  },
  detailItems: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
});
export default MealDetail;
