import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './.expo-shared/componentes/Cabecalho';
import Corpo from './.expo-shared/componentes/Corpo';
import Disciplina from './.expo-shared/componentes/Disciplina';

export default function App() {
  return (
    <View>
      <Cabecalho nome="Vito" curso="Design"></Cabecalho>
      <Corpo></Corpo>
      <Disciplina disciplina="Projeto"></Disciplina>
      <Disciplina disciplina="Mobile"></Disciplina>

      </View>
  );
}


