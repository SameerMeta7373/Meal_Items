import {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FavouritesContext} from '../Store/Context/Favourite_Context';
import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';
import MealsList from '../Components/MealsList/MealsList';

function FavouriteScreen() {
  //   const favouriteMealCon = useContext(FavouritesContext);
  const favouriteMealId = useSelector((state: any) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal: any) => {
    return favouriteMealId.includes(meal.id);
  });

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Favourite Meals</Text>
      </View>
    );
  }
  console.log(favouriteMeals);

  return <MealsList displayMealsId={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavouriteScreen;
