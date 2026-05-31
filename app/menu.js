import { View, Text, StyleSheet , Pressable , Image , ScrollView} from  "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { menuitems } from "../data/menudata";
export default function Menu() {
  return (
    <ScrollView style={styles.containerpage}
showsVerticalScrollIndicator={false}
    >
      
      
    <View style={styles.topbar}>
      
         <Pressable onPress={() => router.replace("/")
          
         } style={styles.iconBorder}>
      <Ionicons 
      name="chevron-back"
      size={29}
      color={"#bd8e30"}
      
      />
      
      
        </Pressable>
         <View onPress={() => router.replace("/")
          
         } style={styles.iconBorder}>
      <Ionicons 
      name="cart-outline"
      size={29}
      color={"#bd8e30"}
      
      />
      
      
        </View>
        
    </View>
       <View style={styles.logoContainer}>

  <Image
    source={require("../assets/zalije.png")}
    style={styles.logo}
  />
  <Image
     source={require("../assets/logo.png")}
  style={styles.logo2}
            />
            <View style={styles.textoverlay}>
              <Text style={styles.title}>
               Menu 
              </Text>
              <Text style={styles.subtitles}>Choose  your best Flavor </Text>
               <View style={styles.line}></View>
            </View>
            
            
</View>

     
    <View style={styles.border2}></View>
<View style={styles.cardsContainer}>
  {menuitems.map( (item) => (
<View style={styles.card}
key={item.id}>
<Image
  source={item.image}
  style={styles.foodImage}
/>
<View style={styles.textoverlay2}>
              <Text style={styles.title2}>
             {item.title}
              </Text>
              <Text style={styles.description}>{item.description}</Text>
              
                <Text style={styles.price}>{item.price}</Text>
                
              <Pressable style={styles.plusButton}>

  <Ionicons
    name="add"
    size={20}
    color="#bd8e30"
  />

</Pressable>


            </View>
           
            
</View>
))}

</View>
<View style={styles.table}>
  <Text style={styles.text2}>reserve A table</Text>
</View>


    </ScrollView>
    
  );
} 

const styles = StyleSheet.create({
containerpage:{
  
  backgroundColor:"#021A14",
   flex: 1,
     height:"100%",
     width:"100%",
     
     
},
topbar:{
flexDirection:"row",
justifyContent:"space-between"


},

iconBorder:{
width:50,
height:50,
borderRadius:100,
borderWidth:3,
borderColor:"#D4A84F",
justifyContent:"center",
alignItems:"center",
top:44,


},
logoContainer:{

alignItems:"center",
top:30,

},
logo:{
   width: 350,
  height:360,
  top:30,
  borderWidth:1,
  borderColor: "#ECC880",
},


logo2:{
  width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: "#D4A84F",
    borderRadius: 50,
    margin: 4,
    position:"absolute",
    top:30,

    
},
textoverlay:{
position:"absolute",
alignItems:"center",
top:160,
gap:40,
},
title:{
  fontSize:60,
color:"#D4A84F",

},
subtitles:{
  fontSize:28,
  color:"#C63017",


},
line:{
  width: 330,
  height: 1,
  backgroundColor: "#D4A84F",
  marginTop: -20,
},
border2:{
    width: "95%",
  height: 5,
  backgroundColor: "#C63017",
  alignSelf:"center",
  marginTop:20,
  top:70,
},
cardsContainer:{
marginTop: 100,

alignSelf: "center",

  
  },
  card:{
width: "95%",
  backgroundColor: "#06251B",
  borderWidth: 1.5,
  borderColor: "#D4A84F",
  borderRadius: 20,
  paddingTop: 20,
  paddingLeft: 80,
 marginBottom: 40,

  },
  foodImage:{
   width: 100,
  height: 100,
  borderRadius: 50,
  borderWidth: 2,
  borderColor: "#D4A84F",
  position: "absolute",
  top: -20,
  left: -5,
  },
  textoverlay2:{

alignItems:"center",
justifyContent:"center",
gap:10,
left:10,
  },
  title2: {
  color: "#D4A84F",
  fontSize: 28,
  fontWeight: "bold",
  
},
description:{
 color: "white",
  fontSize: 16,
  lineHeight: 20,
  top:30,
  

},
price:{
  borderColor:"#ECC880",
  borderWidth:1,
  alignSelf:"flex-start",
  right:80,
  top:40,
  padding:10,
borderRadius:40,
fontSize:20,
color:"white",

},
plusButton:{
  width: 40,
  height: 40,
  backgroundColor: "#C63017",
  borderRadius: 20,
  alignSelf:"flex-end",
  top:20,
  justifyContent:"center",
  alignItems:"center",
  
},
table:{
  alignSelf: "center",
  width: 220,
  height: 64,
  borderRadius: 32,
  borderWidth: 2,
  borderColor: "#D4A84F",
  backgroundColor: "#06251B",
  justifyContent: "center",
  alignItems: "center",
  shadowColor: "#D4A84F",
shadowOffset: { width: 0, height: 7 },
shadowOpacity: 0.9,
shadowRadius: 20,
},
text2:{
  color: "#F7C154",
    fontSize: 25,},

});  