import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-web';

export default function App() {

  const data = [
   {
      "id": 1,
      "fase": "Fase de grupos",
      "grupo": "A",
      "data_et": "2026-06-11",
      "hora_et": "15:00",
      "data_brasilia": "2026-06-11",
      "hora_brasilia": "16:00",
      "time_casa": "México",
      "sigla_casa": "MEX",
      "time_fora": "África do Sul",
      "sigla_fora": "RSA",
      "confronto": "México x África do Sul",
      "estadio": "Estádio Azteca",
      "cidade": "Cidade do México",
      "pais": "México"
    },
    {
      "id": 2,
      "fase": "Fase de grupos",
      "grupo": "A",
      "data_et": "2026-06-11",
      "hora_et": "22:00",
      "data_brasilia": "2026-06-11",
      "hora_brasilia": "23:00",
      "time_casa": "Coreia do Sul",
      "sigla_casa": "KOR",
      "time_fora": "Tchéquia",
      "sigla_fora": "CZE",
      "confronto": "Coreia do Sul x Tchéquia",
      "estadio": "Estádio Akron",
      "cidade": "Guadalajara",
      "pais": "México"
    }

  ]

  return (
    <View style={styles.container}>

      <Image
      source={require("./assets/logounicopa.png")}
      style={{width: 200, height: 150, marginTop: 30, resizeMode: "contain"}}
      />
      <Text style={styles.titulo}>CALENDÁRIO</Text>

    <View style={styles.card}>

        <Text style={styles.data}>11/06</Text>

        <View style={styles.divisao}></View>
        
      <View style={styles.match}>

        <Text style={styles.grupo}>GRUPO {data[0].grupo} </Text>
        <Text style={styles.confronto}>{data[0].confronto}</Text>

      <View style={styles.matchRow}>

        <View style={styles.team}>
        <Image
          source={require("./assets/times/mexico.png")}
          style={styles.flag}
          />
        <Text style={styles.time}>{data[0].sigla_casa}</Text>
          </View>

      <View style={styles.center}>
        <Text style={styles.hora}>{data[0].hora_brasilia}</Text>
        <Text style={styles.vs}>vs</Text>
      </View>

      <View style={styles.team}>
        <Text style={styles.time}>{data[0].sigla_fora}</Text>
        <Image
          source={require("./assets/times/southafrica.png")}
          style={styles.flag}
          />
        </View>

        </View>

        <View style={styles.divisao}></View>

      <View style={styles.footer}>
        <Text style={styles.estadio}>{data[0].estadio}</Text>
        <Text style={styles.cidade}>{data[0].cidade} • {data[0].pais}</Text>
      </View>

      </View>

      <View style={styles.divisao}></View>

    {/* ---------------------------------------------------------------- -----------------*/}
      
      <View style={styles.match}>

        <Text style={styles.grupo}>GRUPO {data[1].grupo}</Text>
        <Text style={styles.confronto}>{data[1].confronto}</Text>

        <View style={styles.matchRow}>

          <View style={styles.team}>

          <Image
          source={require("./assets/times/south korea.png")}
          style={styles.flag}
          />
          <Text style={styles.time}>{data[1].sigla_casa}</Text>
          </View>

        <View style={styles.center}>
        <Text style={styles.hora}>{data[1].hora_brasilia}</Text>
        <Text style={styles.vs}>vs</Text>
        </View>

      <View style={styles.team}>
        <Text style={styles.time}>{data[1].sigla_fora}</Text>
        <Image
          source={require("./assets/times/czech republic.png")}
          style={styles.flag}
          />
          </View>
          </View>

          <View style={styles.divisao}></View>

      <View style={styles.footer}>
        <Text style={styles.estadio}>{data[1].estadio}</Text>
        <Text style={styles.cidade}>{data[1].cidade} • {data[1].pais}</Text>
      </View>

      </View>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1C2C",
    alignItems: "center",
  },

  logo: {
    width: 250,
    height: 80,
    marginTop: 30,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },

  card: {
    backgroundColor: "#112B44",
    width: "90%",
    borderRadius: 20,
    padding: 16,
  },

  data: {
    fontSize: 20,
    color: "#FFD700",
    fontWeight: "bold",
    marginBottom: 10,
  },

  match: {
    marginBottom: 10,
  },

  grupo: {
    color: "#A0B3C6",
    fontSize: 12,
    marginBottom: 10,
  },

  matchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  team: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  flag: {
    width: 40,
    height: 40,
  },

  time: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  center: {
    alignItems: "center",
  },

  hora: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  vs: {
    color: "#A0B3C6",
    fontSize: 12,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  info: {
    color: "#A0B3C6",
    fontSize: 12,
  },

  divisao: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginVertical: 12,
  },
});
