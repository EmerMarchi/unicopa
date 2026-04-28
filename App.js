import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require("./assets/logounicopa.png")}
      style={{width: 650, height: 150, marginTop: 30}}
      />
      <Text style={styles.titulo}>CALENDÁRIO</Text>
    <View style={styles.card}>

      <Text style={styles.data}>11/06</Text>

      <Text style={styles.grupo}>Grupo A México x África do Sul</Text>

      <Image
      source={require("./assets/times/mexico.png")}
      style={{width: 50, height: 50, marginTop: 30}}
      />

      <Text style={styles.time}>MEX</Text>

      <Text style={styles.hora}>16:00</Text>

      <Text style={styles.vs}>vs</Text>

      <Text style={styles.time}>SRA</Text>

      <Image
      source={require("./assets/times/southafrica.png")}
      style={{width: 50, height: 50, marginTop: 30}}
      />

     <Text style={styles.estadio}>Estádio Azteca </Text>
     <Text style={styles.cidade}>Cidade do México • México</Text>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1C2C",
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 15,
    color: "#fff"
  },
   card: {
  backgroundColor: "#112B44",
  width: 600,
  height: 400,
  borderRadius: 20,
  padding: 100,
  alignItems: "center",
}
});
