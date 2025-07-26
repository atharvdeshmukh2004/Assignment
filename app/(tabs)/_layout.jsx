import { View, Text, TouchableOpacity } from 'react-native'
 import React from 'react'
import { Tabs } from "expo-router";
import { HugeiconsIcon } from "@hugeicons/react-native";
import {
  QrCodeIcon,
  Home10Icon,
  PercentCircleIcon,
} from "@hugeicons/core-free-icons";
import { Button } from '@react-navigation/elements';


import Home from "./Home"
export default function TabsLayout() {  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          width: 360,
          height: 100,
          backgroundColor: "#0b0b0bff",
          elevation: 8,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          title: "home",
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon
              icon={Home10Icon}
              size={24}
              color="#e8e2e2ff"
              strokeWidth={1.5}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Pay"
        options={{
          headerShown: false,
          title: "yolo pay",
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon
              icon={QrCodeIcon}
              size={24}
              color="#e8e2e2ff"
              strokeWidth={1.5}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Ginie"
        options={{
          headerShown: false,
          title: "ginie",
          tabBarIcon: ({ color, size }) => (
            <HugeiconsIcon
              icon={PercentCircleIcon}
              size={24}
              color="#e8e2e2ff"
              strokeWidth={1.5}
            />
          ),
        }}
      />
    </Tabs>
  );

}