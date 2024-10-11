import {createContext, useState} from 'react';
import Meal from '../../Models/Meal';

interface IFavoriteMeal {
  ids: any[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

export const FavouritesContext = createContext<IFavoriteMeal>({
  ids: [],
  addFavourite: (id: string) => {},
  removeFavourite: (id: string) => {},
});

function FavouritesContextProvider({children}: any) {
  const [favouriteMealId, setFavouriteMealId] = useState([]);

  function addFavourite(id: string) {
    setFavouriteMealId((currFavId): any => [...currFavId, id]);
    console.log(id);
  }

  function removeFavourite(id: string) {
    setFavouriteMealId(currFavId => currFavId.filter(mealId => mealId !== id));
  }

  const values = {
    ids: favouriteMealId,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouritesContext.Provider value={values}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
