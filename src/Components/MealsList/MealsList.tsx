import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from '../MealsList/MealItem';
import {useNavigation} from '@react-navigation/native';

function MealsList({displayMealsId}: any) {
  const navigation: any = useNavigation();

  function renderItems(itemData: any) {
    const item = itemData.item;

    function PressHandler() {
      navigation.navigate('Detail', {
        mealId: item.id,
      });
    }

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: PressHandler,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={displayMealsId}
        keyExtractor={item => item.id}
        renderItem={renderItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: '15%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
});

export default MealsList;
