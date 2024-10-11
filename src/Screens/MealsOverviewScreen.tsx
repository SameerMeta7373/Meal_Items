import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../Components/MealsList/MealItem';
import {useEffect, useLayoutEffect} from 'react';
import MealsList from '../Components/MealsList/MealsList';

function MealsOverviewScreen({route, navigation}: any) {
  const catId = route.params.categoryId;

  const displayMealsId = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList displayMealsId={displayMealsId} />;
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

export default MealsOverviewScreen;
