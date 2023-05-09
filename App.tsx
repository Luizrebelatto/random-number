import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
export default function App() {

  const [weight, setWeight] = useState<string>();

  return (
    <View style={styles.wrapper}>
        <Text style={styles.title}>Sorteio</Text>
        <View style={styles.wrapperInputs}>
          <TextInput
            placeholder='Digite o valor final do sorteio'
            keyboardType='number-pad'
            value={weight}
            onChangeText={(value) => setWeight(value)}
            style={styles.input}
          />
        </View>
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>SORTEAR</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 10
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#5061ab',
    height: '100%',
    padding: 20,
    paddingTop: '50%'
  },
  wrapperInputs: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  wrapperButton: {
    marginTop: 22,
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
    textAlign: 'center'
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  },
});
