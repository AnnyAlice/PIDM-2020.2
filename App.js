import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './.expo-shared/componentes/Cabecalho';
import Corpo from './.expo-shared/componentes/Corpo';
import Disciplina from './.expo-shared/componentes/Disciplina';
import styles from "./.expo-shared/componentes/style.js"

export default function App() {
  return (
    <View style={styles.container}>

      <Corpo></Corpo>
      
      <Cabecalho nome="Ekko" curso="Design"></Cabecalho>

      <View style={styles.disciplinas}>
        <Disciplina disciplina="Projeto"></Disciplina>
        <Disciplina disciplina="Mobile"></Disciplina>
      </View>

    </View>
  );
}


