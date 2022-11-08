import { createContext, ReactNode, useContext, useState } from "react";
import { Meal } from "src/@types/meal";


type MealContextProviderProps = {
  children: ReactNode;
}

type MealContextData = {
  mealList: Meal[];
  percent: number;
  calculatePercent: () => void;
  AddToMealList: (meal: Meal[]) => void;
}

const MealContext = createContext({} as MealContextData);


export const MealContextProvider = ({ children }: MealContextProviderProps) => {
  const [mealList, setMealList] = useState<Meal[]>([]);
  const [percent, setPercent] = useState(0);

  const calculatePercent = () => {
    const totalStatus = mealList.reduce((acc, total) => {
      total.data.forEach(element => {
        if (element.type === 'in') {
          acc.in += 1
        } else {
          acc.out += 1
        }
      });
      
      return acc; 
    }, {
      in: 0,
      out: 0
    })

    let total = 0

    total = Number(((totalStatus.in  * 100) / (totalStatus.in + totalStatus.out)).toFixed(2));


    if (isNaN(total)) {
      setPercent(0)
    } else {
      setPercent(total)
    }
  }

  const AddToMealList = (meal: Meal[]) => {
    setMealList(meal);
  }

  return (
    <MealContext.Provider value={{mealList, percent, calculatePercent, AddToMealList}}>
      {children}
    </MealContext.Provider>
  )
}

export const useMeal = () => {
  const context =  useContext(MealContext);

  return context;
}