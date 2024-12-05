import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}> Ler é Diverção</Text>
      <TextInput style={styles.input} placeholder="Pesquise o livro:" /> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc1d5',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 50
  },

  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 16,
    width: 300,
    height: 20,
    paddingTop: 18
  },

  textoPrincipal: {
    fontSize: 22,
    fontStyle: 'Arial'
  },

  pesquisaLivro: {
    height: 200,
    textAlignVertical: 'top'
  },
});
