import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";

export default function Home() {
  const handleParticipantAdd = () => {
    console.log("Você clicou no botão de Adicionar!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Terça, 31 de janeiro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.Input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
