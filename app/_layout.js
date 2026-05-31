import { Tabs , } from "expo-router";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Layout (){
  return(
    <Tabs  screenOptions={{
       tabBarShowLabel: false,
        headerShown: false,tabBarStyle: {
  backgroundColor: "#06251B",height: 85 ,borderColor: "#D4A84F", 
  
},
      }}>
      
      <Tabs.Screen name="index"   options={{
        tabBarIcon :({color , name , size ,  focused}) => (
         <View style= {{
           borderWidth: 2,
           top:15,
backgroundColor:focused ? "#C63017" : "white",
            height: 50,

            width: 50,

            borderColor:"#D4A84F",

            borderRadius:50,

            justifyContent:"center",

            alignItems:"center",
            

         }}>
          <Ionicons 
          name="home"
          size={25}
          
          
          />
          </View>
         
        ),
      }} />
      <Tabs.Screen name="menu"   options={{
        tabBarIcon :({color , name , size ,  focused}) => (
         <View style= {{
           borderWidth: 2,
           top:15,
backgroundColor:"white",
            height: 50,

            width: 50,

            borderColor:"#D4A84F",

            borderRadius:50,

            justifyContent:"center",

            alignItems:"center",
backgroundColor:focused ? "#C63017" : "white",
         }}>
          <Ionicons 
          name="restaurant"
          size={25}
          
          />
          </View>
         
        ),
      }} />
          
    </Tabs>
    
  );
}