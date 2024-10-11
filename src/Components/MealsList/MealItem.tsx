import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MealDetail from '../MealDetail';

function MealItem({
  title,
  imageUrl,
  onPress,
  duration,
  affordability,
  complexity,
}: any) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#c2c1c1'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail
          duration={duration}
          affordability={affordability}
          complexity={complexity}></MealDetail>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 6,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    margin: 10,
  },
  mealItem: {
    margin: 25,
    borderRadius: 10,
    elevation: 10,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },

  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
