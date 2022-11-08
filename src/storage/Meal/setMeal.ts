import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from "immer";

import { getAllMeals } from '@storage/Meal/getAllMeals';
import { ID_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { Meal } from 'src/@types/meal';

export const setMeal = async (meal: Meal) => {

  try {
    const storageMeals = await getAllMeals();

    const mealIndex = storageMeals.findIndex(item => item.title === meal.title);

    const mealAlreadyExists = storageMeals[mealIndex]?.data.some(item => item.name === meal.data[0].name)

    if (mealAlreadyExists ) {
      throw new AppError('Já existe uma refeição cadastrada!');
    }

    const updateMealItem = produce(storageMeals, (draft) => {
      if (mealIndex < 0) {
        draft.push(meal)
      } else {
        draft[mealIndex].data.push(meal.data[0])
      }
    })

    const storage = JSON.stringify(updateMealItem);

    await AsyncStorage.setItem(ID_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}