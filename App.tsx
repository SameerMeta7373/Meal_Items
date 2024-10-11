import React from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from './Screens/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './Screens/MealsOverviewScreen';
import MealDetails from './Screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealDetailScreen from './Screens/MealDetailsScreen';
import FavouriteScreen from './Screens/FavouriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavouritesContextProvider from './Store/Context/Favourite_Context';
import {Provider} from 'react-redux';
import {store} from './Store/Redux/store';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#362d2d'},
        headerTintColor: 'white',
        drawerContentStyle: {backgroundColor: '#5f5151'},
        sceneContainerStyle: {backgroundColor: '#888383'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#888383',
        drawerActiveBackgroundColor: '#2b1b1b',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#362d2d'},
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="Meals"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Over-View" component={MealsOverviewScreen} />

            <Stack.Screen
              name="Detail"
              options={{title: "Meal's Detail"}}
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
