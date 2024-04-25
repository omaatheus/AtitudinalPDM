import react from "react"
import { 
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
 } from "react-native"
 
import { english } from "./src/Constants/i18n/english"

export default function NewAccount() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto} >{english.login}</Text>
      <View style={styles.form}>
        <TextInput outlineColor='#989572' mode='outlined' style={styles.inputs} placeholder={english.email} />
        <TextInput outlineColor='#989572' mode='outlined' style={styles.inputs} placeholder={english.password} />
        <TextInput outlineColor='#989572' mode='outlined' style={styles.inputs} placeholder={english.confirm} />

        <Button buttonColor='blue' style={styles.inputs} mode='contained'>
          {english.signin}
        </Button>
      </View>

      <Text styles={styles.signUp}>{english.signup}</Text>

    </SafeAreaView>
  );
}