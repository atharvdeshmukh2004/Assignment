import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width } = Dimensions.get("window");

 const TabBar = ({ state, descriptors, navigation }) => {
 
    const curvePath = `M 0 20 Q ${width / 2} -20 ${width} 20`;
 

   const icons = {
     Pay: (props, any) => ( <Ionicons name="qr-code-outline" size={24} color="black" {...props} />),
       
     Home: (props, any) => (
       <Feather name="home" size={24} color="black" {...props} />
     ),
     Ginie: (props, any) => (
       <Feather name="percent" size={24} color="black" {...props} />
     ),
   };

 
  
     return (
       <View style={styles.container}>
         <View style={styles.svgContainer}>
           <Svg width={width} height="20">
             <Path
               d={curvePath}
               stroke="#444"
               strokeWidth="2"
               fill="transparent"
             />
           </Svg>
         </View>
         {state.routes.map((route, index) => {
           const { options } = descriptors[route.key];
           const label =
             options.tabBarLabel !== undefined
               ? options.tabBarLabel
               : options.title !== undefined
               ? options.title
               : route.name;
           const isFocused = state.index === index;
           const onPress = () => {
             const event = navigation.emit({
               type: "tabPress",
               target: route.key,
               canPreventDefault: true,
             });
             if (!isFocused && !event.defaultPrevented) {
               navigation.navigate(route.name, route.params);
             }
           };
           const onLongPress = () => {
             navigation.emit({
               type: "tabLongPress",
               target: route.key,
             });
           };

           console.log(route.name);
 
              if (route.name == "Pay") {
                return (
                  <TouchableOpacity key={route.name} style={styles.centralTab}>
                    <View style={styles.centralTabIconContainer}>
                      <Ionicons
                        name="qr-code-outline"
                        size={24}
                        color="white"
                      />
                    </View>
                    <Text style={styles.centralLabel}>{label}</Text>
                  </TouchableOpacity>
                );
           }
           
           
           
           return (
             <TouchableOpacity
               key={route.name}
               accessibilityRole="button"
               accessibilityState={isFocused ? { selected: true } : {}}
               accessibilityLabel={options.tabBarAccessibilityLabel}
               testID={options.tabBarButtonTestID}
               onPress={onPress}
               onLongPress={onLongPress}
               style={styles.tabItem}
             >
               <View style={styles.iconContainer}>
                 {
                   icons[route.name]({
                   color: isFocused ? "grey" : "grey",
                 })}
               </View>
  
               <Text style={{ color: isFocused ? "grey" : "grey" }}>
                 {label}
               </Text>
             </TouchableOpacity>
           );
         })}
       </View>
     );
 };

export default TabBar;


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  svgContainer: {
    position: "absolute",
    top: -28,
    width: width,
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#444",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: 4,
  },
  centralTabIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#1c1c1e",
    borderWidth: 1,
    borderColor: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
  centralTab: {
    position: "absolute",
        top: -10, 
        left: width / 2 - 40, 
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
  },

  centralLabel: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "500",
  },
});
