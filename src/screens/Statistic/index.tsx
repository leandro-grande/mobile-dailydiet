import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useMeal } from "@contexts/useMeal";
import { Card } from "@components/Card";
import { DietCard } from "@components/DietCard";
import { ArrowLeftIcon, BackButton, CardRowArea, Container, Header, StatisticArea, Title } from "./styles";
import { Meal } from 'src/@types/meal';


export const Statistic = () => {
  const { percent, mealList } = useMeal();
  const navigation = useNavigation();

  const kpis = mealList.reduce((acc, meals) => {

    meals.data.forEach(meal => {
      let linearDiet = false;
      if (meal.type === 'in') {
        acc.inDiet += 1;
        acc.totalMeals += 1;

        if (acc.inDiet === 0 || linearDiet === false) {
          acc.sequenceInDiet += 1;
        }

      } else { 
        linearDiet = true
        acc.outDiet += 1;
        acc.totalMeals += 1;
      }
    });

    return acc;
  }, {
    totalMeals: 0,
    sequenceInDiet: 0,
    inDiet: 0,
    outDiet: 0
  })


  return (
    <Container percent={percent}>
      <Header>
        <BackButton onPress={() => navigation.navigate('home')}>
          <ArrowLeftIcon percent={percent} />
        </BackButton>

        <DietCard percent={percent} />

      </Header>

      <StatisticArea>
        <Title>Estatísticas gerais</Title>
        
        <Card title={kpis.sequenceInDiet} subtitle="melhor sequência de pratos dentro da dieta" />
        <Card title={kpis.totalMeals} subtitle="refeições registradas" />
        
        <CardRowArea>
          <Card
            style={{marginRight: 12}}
            type="in" 
            title={kpis.inDiet} 
            subtitle="refeições dentro da dieta"
            short 
          />
          <View style={{padding: 6}} />
          <Card
            type="out" 
            title={kpis.outDiet} 
            subtitle="refeições fora da dieta"
            short 
          />
        </CardRowArea>
      </StatisticArea>
    </Container>
  )
}