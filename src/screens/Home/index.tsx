import { useCallback } from "react";
import { Alert, SectionList, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Avatar, Container, Header, Logo, SectionListTitle } from "./styles";
import { Button } from "@components/Button";
import { ButtonLabel } from "@components/ButtonLabel";
import { DietCard } from "@components/DietCard";
import { SectionListItem } from "@components/SectionListItem";

import avatarImg from '@assets/avatar.png';
import logoImg from '@assets/logo.png';
import { getAllMeals } from "@storage/Meal/getAllMeals";
import { useMeal } from "@contexts/useMeal";

export type MealData = {
  name: string;
  hour: string;
  description: string;
  type: "" | 'in' | 'out'
}


export const Home = () => {
  const { mealList, percent, calculatePercent, AddToMealList } = useMeal();

  const navigation = useNavigation();


  const fetchMeals = async () => {
    try {
      const data = await getAllMeals();

      AddToMealList(data)
      calculatePercent();
    } catch (error) {
      Alert.alert('Erro', 'Erro ao carregar os dados')
    } 
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, [mealList]))

  const handleAddMeal = () => {
    navigation.navigate('addMeal')
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Avatar source={avatarImg} />
      </Header>
      
      <DietCard
        onPress={() => navigation.navigate('statistic', { meal: mealList })} 
        percent={percent}
        icon 
      />

      <ButtonLabel />
      <Button 
        title="Nova refeição" 
        icon
        iconType="add"
        onPress={handleAddMeal} 
      />

      {mealList.length > 0  && (
        <SectionList
          style={{marginTop: 16}}
          sections={mealList}
          keyExtractor={item => item.name}
          renderItem={({item, section: { title }}) => (
            <SectionListItem item={item} onPress={() => navigation.navigate("meal", { mealItem: item, date: title } )} />
          )}
          renderSectionHeader={ ({section: { title }}) => (
            <SectionListTitle>{title}</SectionListTitle>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
        />
        )
      }
      
    </Container>
  )
}