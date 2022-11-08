import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FeedbackInDiet } from '@screens/FeedbackInDiet';
import { FeedbackOutDiet } from '@screens/FeedbackOutDiet';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { Statistic } from '@screens/Statistic';
import { AddMeal } from '@screens/AddMeal';
import { UpdateMeal } from '@screens/UpdateMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      <Screen name='home' component={Home} />
      <Screen name='statistic' component={Statistic} />
      <Screen name='addMeal' component={AddMeal} />
      <Screen name='meal' component={Meal} />
      <Screen name='updateMeal' component={UpdateMeal} />
      <Screen name='feedbackInDiet' component={FeedbackInDiet} />
      <Screen name='feedbackOutDiet' component={FeedbackOutDiet} />
    </Navigator>

  )
}