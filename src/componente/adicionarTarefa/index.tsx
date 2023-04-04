import React, { useState } from "react";
import {
  
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import axios from "axios";
interface Props {
  adicionarTarefa: (tarefa: string) => void;
}

export function FormularioTarefa({ adicionarTarefa }: Props) {
  const [tarefa, setTarefa] = useState("");

  function adicionar() {
    if (tarefa.trim() !== "") {
      adicionarTarefa(tarefa.trim());
      setTarefa("");
    }
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione a tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <TouchableOpacity style={styles.button} onPress={adicionar}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}