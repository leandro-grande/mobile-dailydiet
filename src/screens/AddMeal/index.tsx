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
import { Meal } from "src/@types/meal";

import { ArrowLeftIcon, BackButton, Container, FlexRow, Form, Header, Label, Title } from "./styles";

const mealValidationSchema = yup.object({
  name: yup.string().min(1, '"Preencha o nome da refeição"'),
  description: yup.string().min(1, "Preenche a descrição"),
  data: yup.string(),
  hour: yup.string().min(1, "Preencha o campo hora"),
})

type mealFormData = {
  name: string;
  description: string;
  data: string;
  hour: string;
}

export const AddMeal = () => {
  const [active, setActive] = useState<ButtonStyleProps>(''); 
  const { handleSubmit, control, reset } = useForm<mealFormData>({
    resolver: yupResolver(mealValidationSchema),
  });

  const navigation = useNavigation();
  const handleAddMeal = async (meal: mealFormData) => {

    if (active === "") {
      Alert.alert("Dieta", "Preencha o campo da dieta")
      return
    }
    
    const newMeal: Meal = {
      title: meal.data,
      data: [{
        name: meal.name,
        hour: meal.hour,
        description: meal.description,
        type: active
      }]
    }

    try {
      await setMeal(newMeal);
      reset();
      setActive('');

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Refeição", "Já existe uma refeição com este nome.")
      }
     console.log(error)
    }

  }

  return (
    <Container>
        <Header>
          <BackButton onPress={() => navigation.navigate('home')}>
            <ArrowLeftIcon />
          </BackButton>

          <Title>
            Nova Refeição
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
              title="Cadastrar refeição"
              onPress={handleSubmit(handleAddMeal)}
            />      
      </Form>
      
    </Container>
  )
}