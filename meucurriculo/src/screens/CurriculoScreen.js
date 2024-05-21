import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CurriculoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>                              MEU CURRICULO</Text>
      <Text style={styles.text}>________________________________________</Text>
    <Text style={styles.text}>Sou um estudante do curso de Análise e Desenvolvimento de Sistemas, tenho 18 anos e atualmente no 3º Período da Faculdade</Text>
    <Text style={styles.text}>Busco aprimorar os meus conhecimentos em programação, desenvolvimento de software e gestão de projetos. </Text>
    <Text style={styles.text}>Estou à procura de oportunidades que me façam aplicar e expandir minhas habilidades no ramo da tecnologia.</Text>
    <Text style={styles.text}></Text>
    <Text style={styles.text}>                                 FORMAÇÃO</Text>
    <Text style={styles.text}>________________________________________</Text>
      <Text style={styles.text}>Ensino médio completo 2020 - 2022</Text>
      <Text style={styles.text}>________________________________________</Text>
      <Text style={styles.text}> Graduação em ADS</Text>
      <Text style={styles.text}> Instituição: Faculdade SENAC</Text>
      <Text style={styles.text}> 3ºPeríodo    2023.1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: '',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    margin: 8,
  },
});
