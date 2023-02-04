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

import { RestaurantsContextProvider } from
"./src/services/restaurants/restaurants.context";

import { LocationContextProvider } from "./src/services/location/location.context";

import 'react-native-gesture-handler';
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";

import { Navigation } from "./src/infrastructure/navigation";

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
          <Navigation/>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
