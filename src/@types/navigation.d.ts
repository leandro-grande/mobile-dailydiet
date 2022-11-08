import { Meal } from './meal'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistic: {
        meal: Meal[]
      }
      addMeal: undefined,
      updateMeal?: {
        mealItem: {name: string, description: string, hour: string, type: "" | "in" | "out" }
        date: string;
      }
      meal: {
        mealItem: {name: string, description: string, hour: string, type: "" | "in" | "out" },
        date: string;
      }
      feedbackInDiet: undefined;
      feedbackOutDiet: undefined
    }
  }
}