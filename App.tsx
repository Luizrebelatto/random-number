import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
export default function App() {

  const [numberLimit, setNumberLimit] = useState<string>();
  const [randomNumber, setRandomNumber] = useState<string>();

  function getRandom(max: any) {
    setRandomNumber(String(Math.floor(Math.random() * Number(max) + 1)));
  }

  return (
    <View style={styles.wrapper}>
        <Text style={styles.title}>Sorteio</Text>
        <View style={styles.wrapperInputs}>
          <TextInput
            placeholder='Digite o valor final do sorteio'
            keyboardType='number-pad'
            value={numberLimit}
            onChangeText={(value) => setNumberLimit(value)}
            style={styles.input}
          />
        </View>
        <View style={styles.wrapperButton}>
          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.9}
            onPress={() => getRandom(numberLimit)}
          >
            <Text style={styles.textButton}>SORTEAR</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.result}>{randomNumber}</Text>
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
  result: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 50
  }
});
