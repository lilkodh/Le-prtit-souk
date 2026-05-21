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

});