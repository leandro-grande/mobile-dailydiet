import { useState } from "react";
import { Alert, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";
import { ButtonStyleProps } from "@components/ButtonDiet/styles";
import { 
      ArrowLeftIcon, 
      BackButton, 
      Contain, 
      Container, 
      Form, 
      Header, 
      HeaderTitle, 
      Title, 
      Description, 
      DateTitle, 
      Date, 
      Status,
      StatusText,
      StatusBadge, 
    } from "./styles";
import { removeMeal } from "@storage/Meal/removeMeal";

export type RouteParams = {
  mealItem: {
    name: string;
    hour: string;
    description: string;
    type: 'in' | 'out'
  }
  date: string;
}

export const Meal = () => {
  const [active, setActive] = useState<ButtonStyleProps>('');
  const navigation = useNavigation();

  const route = useRoute();
  const { mealItem, date } = route.params as RouteParams;

  const handleRemoveMeal = async () => {

    Alert.alert("Remover Refeição", "Tem certeza que deseja remover essa refeição?",
      [
        {text: "Não", style: "cancel"},
        {text: "Sim", onPress: async () => {
          await removeMeal(mealItem.name, date);
          navigation.navigate('home');
        }}
      ]
    )
  }

  const handleEditMeal = () => {
    navigation.navigate("updateMeal", {mealItem: mealItem, date: date})
  }

  return (
    <Container type={mealItem.type}>
        <Header>
          <BackButton onPress={() => navigation.navigate("home")}>
            <ArrowLeftIcon />
          </BackButton>

          <HeaderTitle>
            Refeição
          </HeaderTitle>
        </Header>

      <Form>
        <Contain>
          
          <Title>{mealItem.name}</Title>

          <Description>
            {mealItem.description}
          </Description>

          <DateTitle>Data e hora</DateTitle>

          <Date>
            {date} às {mealItem.hour}
          </Date>

          <Status>
            <StatusBadge type={mealItem.type} />
            <StatusText>
             { mealItem.type === "in" ? "dentro da dieta" : "fora da dieta" } 
           </StatusText>
          </Status>

        </Contain>
                  
        <Button
          icon
          iconType="edit"
          title="Editar refeição"
          onPress={handleEditMeal}  
        />

        <View style={{height: 8}} />

        <Button
          ghost
          icon
          iconType="delete"
          title="Excluir refeição"
          onPress={handleRemoveMeal}  
        />  
      </Form>
    </Container>
  )
}