import AsyncStorage from "@react-native-async-storage/async-storage";
import { ID_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";


export const removeMeal = async (mealName: string, date: string ) => {

  try {

    let storage = await getAllMeals();

    const mealIndex = storage.findIndex(meal => meal.title === date);
  
    if (storage[mealIndex].data.length > 1) {

      const index = storage[mealIndex].data.findIndex(meal => meal.name === mealName)

      storage[mealIndex].data.splice(index, 1);

      await AsyncStorage.setItem(ID_COLLECTION, JSON.stringify(storage));
      
    } else {
      
      const updateStorage = storage.filter(meal => meal.title !== date)

      await AsyncStorage.setItem(ID_COLLECTION, JSON.stringify(updateStorage));  
    }

  } catch (error) {
    throw error;
  }

}