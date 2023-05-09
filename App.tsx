import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
export default function App() {

  const [weight, setWeight] = useState<string>();

  return (
    <View>
        <Text>Qual seu Peso?</Text>
        <TextInput
           placeholder='Digite seu peso: kg'
           keyboardType='numbers-and-punctuation'
           value={weight}
           onChangeText={(value) => setWeight(value)}
        />
    </View>
  );
}