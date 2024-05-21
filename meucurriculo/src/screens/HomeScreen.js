import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Adonis Vinicius Guedes da Silva</Text>
      <Image source={require('../../assets/minhafoto.png')} style={styles.image} />
      
      <View style={styles.buttonContainer}>
        <Button
          title="Meu Currículo"
          onPress={() => navigation.navigate('Curriculo')}
          color="black"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 0,
    marginBottom: 0,

    
  },
  name: {
    fontSize: 25,
    marginBottom: 40,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 175,
  },
  buttonContainer: {
    marginTop: 40,
  },
});
