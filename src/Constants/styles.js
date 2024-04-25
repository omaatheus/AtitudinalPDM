import { StyleSheet } from "react-native";
import { height, width } from "./dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',      
        height: height,
        width: width,
      },

      texto: {
        marginTop: 150,
        marginLeft: -120,
        fontSize: 18,
      },

      formInput: {
        width: width,
        backgroundColor: "#fff",
        height: height * 0.3,
        alignItems: "center",
        paddingTop: 20,
        borderColor: "#000"
      },

      inputs: {
        width: "80%",
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "#000"
      },

      button: {
        width: "80%",
      }

   })