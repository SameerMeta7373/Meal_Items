import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetail from '../Components/MealDetail';
import Subtitle from '../Components/MealDetail/Subtitle';
import List from '../Components/MealDetail/List';
import {useContext, useLayoutEffect, useState} from 'react';
import IconButton from '../Components/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {addFavourite, removeFavourite} from '../Store/Redux/FavouriteSlice';

function MealDetailScreen({route, navigation}: any) {
  // const favouriteMealCon = useContext(FavouritesContext);

  const favouriteMealsId = useSelector(
    (state: any) => state.favouriteMeals.ids,
  );

  const dispatch = useDispatch();

  const mealId = route?.params?.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const mealIsFavourite = favouriteMealsId.includes(mealId);

  function FavouriteButtonHandler() {
    if (mealIsFavourite) {
      // favouriteMealCon.removeFavourite(mealId);
      dispatch(removeFavourite({id: mealId}));
    } else {
      // favouriteMealCon.addFavourite(mealId);
      dispatch(addFavourite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'white', marginRight: 8, fontSize: 15}}>
              {mealIsFavourite ? 'Added' : 'Add to Favourites'}
            </Text>
            <IconButton
              icon={mealIsFavourite ? 'heart' : 'heart-outline'}
              color="white"
              onPress={FavouriteButtonHandler}
            />
          </View>
        );
      },
    });
  }, [navigation, mealIsFavourite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.imageStyle}
        source={{uri: selectedMeal?.imageUrl}}></Image>
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetail
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients}></List>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  imageStyle: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 14,
    color: '#000000',
    textAlign: 'center',
  },
  listInnerContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});

export default MealDetailScreen;
