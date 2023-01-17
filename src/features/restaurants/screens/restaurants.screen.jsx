import * as React from "react"; //เรียกใช้ React
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native'

// $ ใส่เพื่อให้รู้ว่าเป็น code js
const SafeArea = styled.SafeAreaView
`flex: 1;
marginTop: ${StatusBar.currentHeight}px; 
background-color: ${"#F1C98B"};`

const SearchContainer = styled.View`
padding: 16px;

`
const RestaurantList = styled.View`
  background-color: ${"#ffffff"};
  flex: 1;
  padding: 16px;
`


export const RestaurantsScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>

        <RestaurantList>
          {/* เรียกใช้มาจาก RestaurantInfoCard */}
          <RestaurantInfoCard />
        </RestaurantList>
      </SafeArea>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center",
    },
    list: {
      backgroundColor: "#ffffff",
      flex: 1,
      padding: 16
    },
  });
