import react from "react"
import { styles } from "./src/Constants/styles"
import { 
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  TextButton,
 } from "react-native"
import { english } from "./src/Constants/i18n/english"
import { StackNavigation } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NewAccount } from "./src/Screens/newaccount";

export default function App( { navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto} >{english.login}</Text>
      <View style={styles.formInput}>
        <TextInput  outlineColor='#989572' mode='outlined' style={styles.inputs} placeholder={english.email}
        />
        <TextInput outlineColor='#989572' mode='outlined' style={styles.inputs} placeholder={english.password} />
        
      
          <Button buttonColor='blue' style={styles.inputs} mode='contained'>
            {english.signin}
          </Button>
      
      </View>

    <NavigationContainer>{
      
      <TextButton title={english.signup} buttonColor='blue' style={styles.link} mode='contained' onPress={() => navigation.navigate(NewAccount)}/>
          
    }</NavigationContainer>

    </SafeAreaView>
  
)
}