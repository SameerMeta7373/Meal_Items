import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import GridTile from '../Components/CategoryGridTile';

function CategoriesScreen({navigation}: any) {

  function RenderCategory(itemData: any) {

    function PressHandler() {
      navigation.navigate('Over-View', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <GridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={PressHandler}></GridTile>
    );
    
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={RenderCategory}
      keyExtractor={item => item.id}
    />
  );
}



export default CategoriesScreen;
