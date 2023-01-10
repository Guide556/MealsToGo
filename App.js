import * as React from "react"; //เรียกใช้ React
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; // StatusBar as ExpoStatusBar คือการเปลี่ยนชื่อ
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: "#000000" }}> 
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <View style={{ flex: 1, padding: 16, backgroundColor: "#ffffff" }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  position: {
    marginTop: 5,
  },
  search: {
    // marginTop: 5,
    padding: 16,
  },
});
