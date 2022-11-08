import { useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import {Alert,  View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { setMeal } from "@storage/Meal/setMeal";
import { AppError } from "@utils/AppError";
import { Button } from "@components/Button";
import { ButtonDiet } from "@components/ButtonDiet";
import { ButtonStyleProps } from "@components/ButtonDiet/styles";
import { Input } from "@components/Input";
import { MaskedInputHour } from "@components/MaskedInputHour";
import { MaskedInputDate } from "@components/MaskedInputDate";

import { ArrowLeftIcon, BackButton, Container, FlexRow, Form, Header, Label, Title } from "./styles";
import { RouteParams } from "@screens/Meal";
import { Meal, updateMeal } from "@storage/Meal/updateMeal";

const mealValidationSchema = yup.object({
  name: yup.string().min(1, '"Preencha o nome da refeição"'),
  description: yup.string().min(1, "Preenche a descrição"),
  data: yup.string(),
  hour: yup.string().min(1, "Preencha o campo hora"),
})

export type mealFormData = {
  name: string;
  description: string;
  data: string;
  hour: string;
}

export const UpdateMeal = () => {
  const route = useRoute();
  const { mealItem, date } = route.params as RouteParams;

  const [active, setActive] = useState<ButtonStyleProps>(mealItem?.type); 
  const { handleSubmit, control, reset } = useForm<mealFormData>({
    resolver: yupResolver(mealValidationSchema),
    defaultValues: {
      name: mealItem?.name,
      description: mealItem?.description,
      data: date,
      hour: mealItem?.hour
    }
  });
  const navigation = useNavigation();
  

  const handleUpdateMeal = async (meal: mealFormData) => {

    if (active === "") {
      Alert.alert("Dieta", "Preencha o campo da dieta")
      return
    }
    
    const newMeal: Meal  = {
      name: meal.name,
      hour: meal.hour,
      description: meal.description,
      type: active
    }

    try {
      await updateMeal(mealItem.name, date, newMeal);
      Alert.alert("Alteração", "Alteração realizada com sucesso.");
    } catch (error) {
      console.log(error)
    } finally {
      navigation.navigate("home");
    }

  }

  return (
    <Container>
        <Header>
          <BackButton onPress={() => navigation.navigate('home')}>
            <ArrowLeftIcon />
          </BackButton>

          <Title>
            Editar Refeição
          </Title>
        </Header>

      
      <Form>
          <Controller 
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
               label="Nome"
               onChangeText={onChange}
               value={value} 
              />
            )}
          />  

          <Controller 
            name="description"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                textAlignVertical="top"
                numberOfLines={4}
                multiline={true}
                label="Descrição"
                onChangeText={onChange}
                value={value} 
              />
            )}
          />  

          <FlexRow>
            <Controller 
              name="data"
              control={control}
              render={({ field: { value, onChange } }) => (
                <MaskedInputDate
                  short
                  label="Data"
                  onChangeText={onChange}
                  value={value}
                  editable={false}
                />
              )}
              />  
              <View style={{width: 16}} />
              <Controller 
              name="hour"
              control={control}
              render={({ field: { value, onChange } }) => (
                <MaskedInputHour
                  short
                  label="Hora"
                  onChangeText={onChange}
                  value={value} 
                />
              )}
            />    
          </FlexRow>

            <Label>Está dentro da dieta?</Label>
            <FlexRow style={{flex: 1}}>
                <ButtonDiet 
                  type={active === 'in' ? 'in' : ''}  
                  title="Sim"
                  onPress={() => setActive('in')}
                />
                <View style={{width: 8}} />
                <ButtonDiet
                  type={active === 'out' ? 'out' : ''}
                  title="Não"
                  onPress={() => setActive('out')}
                />
            </FlexRow>
            
            <Button
              title="Salvar Alterações"
              onPress={handleSubmit(handleUpdateMeal)}
            />      
      </Form>
      
    </Container>
  )
}