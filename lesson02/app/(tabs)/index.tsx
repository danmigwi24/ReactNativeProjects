import { Text, View,StyleSheet } from 'react-native'

 const app = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> KIMANI LOVES YOU DAN </Text>
      </View>
    )
}

export default app



const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column'
  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center'
  }
})