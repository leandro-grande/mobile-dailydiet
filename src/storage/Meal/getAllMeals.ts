import { ID_COLLECTION } from '@storage/storageConfig';
import AsyncStorage, { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
import { Meal } from 'src/@types/meal';

export const getAllMeals = async () => {

  try {
    const storage = await AsyncStorage.getItem(ID_COLLECTION);

    const meals: Meal[] = storage ? JSON.parse(storage) : []
    
    meals.sort((a, b) => {
      if (a.title > b.title) {
        return 1
      } else {
        return - 1
      }
    })

    return meals;
  } catch (error) {
    throw error;
  }
}