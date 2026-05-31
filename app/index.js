import { View, Text, StyleSheet, ImageBackground, Image ,Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.background}
       
    >
      <View style={styles.overlay}>
        <View style={styles.topbar}>

          <View style={styles.iconborder}>
            <Text style={styles.icon}>☰</Text>
          </View>
          <View style={styles.iconborder}>
            <Text style={styles.icon}>🔔</Text>
          </View>

        </View>

        <View style={styles.logocontainer}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
          />
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
          <View style={styles.menu2}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logo2}
            />
            <View>
              
              <Text style={styles.title}>
                Flavor Authentic
              </Text>
              <Text style={styles.falvor}>
                Discover the authentic flavors of Moroccan cuisine in a warm setting in the heart of Beni Mellal
              </Text>
            </View>
            <View></View>
            <Image
      source={require("../assets/tajine.png")}
      style={styles.Tajine}
    />
          </View>
          <View style={styles.line}></View>
          
        </View>
        <Pressable style={styles.button} 
        onPress={()=> router.replace("menu") }
        >
          <Text style={styles.buttonText}>
    🍽️ View Menu
  </Text>

        </Pressable>
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
     flex: 1,
     height:"100%",
     width:"100%"
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.61)",
    
  },

  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 40,
  },

  iconborder: {
    width: 50,
    height: 50,
    borderRadius: 50,

    borderWidth:2,
    borderColor: "#D4A84F",

    backgroundColor: "#06251B",

    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    color: "#D4A84F",
    fontSize: 25,
  },

  logo: {
    
    width: 100,
    height: 100,

    resizeMode: "contain",

    borderWidth: 3,
    borderColor: "#D4A84F",
    borderRadius: 50,
  },

  logocontainer: {
    flex: 2,
    alignItems: "center",
  },

  textcontainer: {
    justifyContent: "center",
    flexDirection: "row",
    
  
  },

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
    flex: 1,
    color: "#D4A84F",
    fontSize: 30,
    textAlign: "center",
    textDecorationLine: "underline",
  },

  menuCard: {
    flex: 4,
    backgroundColor: "#06251B",
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 200,
    borderWidth: 1,
    borderColor: "#ECC880",
  },

  menu2: {
    height: "94%",
    margin: 5,
    backgroundColor: "#06251B",
    borderRadius: 10,
    width: "95%",
    borderWidth: 1,
    borderColor: "#D4A84F",
    alignSelf: "center",
  },

  logo2: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "#D4A84F",
    borderRadius: 20,
    margin: 4,
    
  },

  line: {
    position: "absolute",
  left: "50%",
  height: 190,
  width: 2,
  backgroundColor: "#D4A84F",
 top:10, 
  },

  falvor: {
    marginLeft: 3,
    width: "45%",
    marginTop: 1,
    color: "white",
    lineHeight: 15,
  },

  title: {
    color: "#F7C154",
    marginLeft: 10,
    marginBottom: 30,
    fontSize: 18,
  },
  button: {
 position: "absolute",
  bottom: 60,
  alignSelf: "center",
  width: 220,
  height: 64,
  borderRadius: 32,
  borderWidth: 2,
  borderColor: "#D4A84F",
  backgroundColor: "#06251B",
  justifyContent: "center",
  alignItems: "center",
  },
  buttonText:{
    color: "#C63017",
    fontSize: 25,
    textAlign: "center",
  },
  Tajine:{
    position:"absolute",
     width: 190,
  height: 190,
  alignSelf: "flex-end",
  top:20,
  
  },

});