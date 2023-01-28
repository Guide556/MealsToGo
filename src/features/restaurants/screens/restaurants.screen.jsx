import React, { useState,useContext } from "react"; //เรียกใช้ React
import { StyleSheet, StatusBar,  FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native'

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea  } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";


const SearchContainer = styled.View`
padding: 16px;

`

// RestaurantList ของเก่า
// const RestaurantList = styled.View`
//   background-color: ${"#ffffff"};
//   flex: 1;
//   padding: 8px;
// `
const Container = styled.View`
background-color: ${"#ffffff"};
`
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState("");
    const onChangeSearch = (query) => setSearchQuery(query);

    const restaurantContext = useContext(RestaurantsContext);
    console.log(restaurantContext);

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

      <Container>
        <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item,index) => index}
        contentContainerStyle={{ padding: 16 }}
      />
          {/* เรียกใช้มาจาก RestaurantInfoCard */}
          {/* <RestaurantInfoCard /> */}
        </Container>
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
