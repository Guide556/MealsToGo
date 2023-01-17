import * as React from "react"; //เรียกใช้ React
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; // StatusBar as ExpoStatusBar คือการเปลี่ยนชื่อ
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { useFonts  as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


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
      <ThemeProvider theme = {theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
