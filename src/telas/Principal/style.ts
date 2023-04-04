

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800080",
    padding: 24,
  },
  textTitulo: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    fontFamily: "Roboto_300Light",
    textAlign: "center"
  },
  image: {
    width: 100,
    height: 100,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    
  },
  ImageContainer: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    display: "flex"
  },
 
  textInputTarefa: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 4,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    fontFamily: "Roboto_300Light"
  },
  botao: {
    width: 56,
    height: 56,
    backgroundColor: "#00FF00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  textTarefa: {
    fontFamily: "Roboto_300Light",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 23,
    color: "#FDFCFE",
    marginBottom: 16,
  }, 
  textTarefaConcluida: {
    fontFamily: "Roboto_300Light",
    fontSize: 20,
    lineHeight: 23,
    color: "#00FF00",
    marginBottom: 16,
    fontWeight: "bold",
  },
  textTarefaNaoConcluida: {
    fontFamily: "Roboto_300Light",
    fontSize: 20,
    lineHeight: 23,
    color: "#FF0000",
    marginBottom: 16,
    fontWeight: "bold",
    },
    
  containerTarefa: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  tituloTarefa: {
    flex: 1,
    fontSize: 22,
    color: "#fff",
    fontFamily: "bold",
    backgroundColor: "#1F1E25"

  },
  statusTarefa: {
    marginRight: 10,
    color: "#fff",
    fontSize: 18
  },
  concluirTarefa: {
    color: "#00FF00",
  },
  botaoDeletar:{
    backgroundColor: "#FF0000",
    height: 20,
    width: 20,
    textAlign: "center",
    color: "#fff"
  }
});
