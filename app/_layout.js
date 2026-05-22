import { Tabs } from "expo-router";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout (){
  return(
    <Tabs  screenOptions={{
        headerShown: false,tabBarStyle: {
  backgroundColor: "#06251B",height: 85 ,borderColor: "#D4A84F",
},
      }}>
      <Tabs.Screen name="index" options={{
        tabBarIcon :({color , name , size ,  focused}) => (
         <View style= {{
           borderWidth: 2,
height:30,
width:60,
    borderColor: "#D4A84F",
    borderRadius: 20,
    backgroundColor: focused
      ? "red"
      : "transparent",
         }}>
          <Ionicons 
          name="home"
          size={25}
          
          />
          </View>
         
        ),
      }} />
          
    </Tabs>
  );
}