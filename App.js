import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotaGeral from './Trabalho04/componentes/Rotas';
import RotaPrincipal from './Trabalho04/componentes/Rotas';




export default function App() {
  return(
    <SafeAreaProvider>
      <RotaGeral></RotaGeral>
    </SafeAreaProvider>
  ) 
};


