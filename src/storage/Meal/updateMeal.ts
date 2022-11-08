
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ID_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals"

export type Meal = {
  name: string;
  description: string;
  hour: string;
  type: "" | "in" | "out";
}


export const updateMeal = async (mealName: string, date: string, meal: Meal) => {

  try {
    const storage = await getAllMeals();

    const mealIndex = storage.findIndex(meal => meal.title === date);
    const mealItem = storage[mealIndex].data.findIndex(meal => meal.name === mealName);
  
    storage[mealIndex].data[mealItem] = {
      name: meal.name,
      description: meal.description,
      hour: meal.hour,
      type: meal.type
    }

    await AsyncStorage.setItem(ID_COLLECTION, JSON.stringify(storage));

  } catch (error) {
    throw error;
  }
}