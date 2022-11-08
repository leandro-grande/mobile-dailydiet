import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'react-native';

import { Loading } from '@components/Loading';
import { Routes } from './src/routes';
import { ThemeProvider } from "styled-components/native";
import theme from './src/theme';
import { MealContextProvider } from '@contexts/useMeal';

export default function App() {
  const [fontLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });
  

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      <MealContextProvider>
          { fontLoaded ? <Routes /> : <Loading /> }
      </MealContextProvider>

    </ThemeProvider>
  );
}
