import { View, Text, StyleSheet, ImageBackground , Image } from "react-native";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.topbar}>

          <View style={styles.iconborder}>
            <Text style={ styles.icon}>☰</Text>
          </View>
          <View style={styles.iconborder}>
            <Text style={styles.icon}>🔔</Text>
          </View>
        </View>
        <View style={styles.logocontainer}>
          <Image source={require("../assets/logo.png")}
             style={styles.logo} />
            
        </View>
        <View style={styles.textcontainer}>
     <Text style={styles.Textt}>
  Wel
</Text>
<Text style={styles.Text}>
come 
</Text>

</View>
<Text style={styles.petit}>
 LE PETIT SOUK
</Text>
<View style={styles.menuCard}>

</View>
     </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(10, 10, 10, 0.45)",
    
  },
topbar: {
  flexDirection: "row",
  justifyContent : "space-between",
  paddingHorizontal: 10,
  marginTop:20,

},
iconborder : {
  width: 50,
  height:50,
  borderRadius: 50,

  borderWidth: 2,
  borderColor: "#D4A84F",
  backgroundColor: "#06251B",
 
  justifyContent: "center",
  alignItems : "center"
},
icon : {
  color: "#D4A84F",
  fontSize: 25,
},
logo:{
  width: 100,
  height : 100,
  resizeMode:"contain",
  borderWidth:3,
  borderColor:"#D4A84F",
  borderRadius: 50,
  
  
},
logocontainer:{
  flex: 1,
  alignItems:"center",
  marginTop:50,
  
},
textcontainer : {

  justifyContent: "center",
  flexDirection: "row",
  flex: 0.2,
  
}
,
Textt: {
color: "#C63017",
  fontSize: 70,

  textAlign: "center",
 
},
Text: {
  color: "#ECC880",
  fontSize: 70,

  textAlign: "center",
},
petit: {
  flex:4,
  color: "#D4A84F",
  fontSize: 30,
  textAlign: "center",
  textDecorationLine: "underline",
},
menuCard: {
  flex: 3,
  backgroundColor: "#06251B",
},
});