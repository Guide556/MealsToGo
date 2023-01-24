import * as React from "react"; //เรียกใช้ React
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; // StatusBar as ExpoStatusBar คือการเปลี่ยนชื่อ
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { useFonts  as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeArea } from "./src/components/utility/safe-area.component";
import { Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

// Tab Navigater
const createScreen = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName = TAB_ICON[route.name];
 
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false
})

export default function App() {

  // font
  let [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  // ถ้าไม่มี font ให้ return ค่าที่กำหนด
  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {/* headerShown: false ไม่แสดงส่วนหัวของ Tab navigator */}
          <Tab.Navigator
          screenOptions={createScreen}
        >

            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>

          <ExpoStatusBar style="auto" />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
