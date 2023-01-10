import * as React from "react"; //เรียกใช้ React
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; // StatusBar as ExpoStatusBar คือการเปลี่ยนชื่อ
import { RestaurantsScreen  } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen/>
      <ExpoStatusBar style="auto" />
    </>
  );
}

