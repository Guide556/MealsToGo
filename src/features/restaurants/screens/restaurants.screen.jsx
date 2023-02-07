import React, { useState,useContext } from "react"; //เรียกใช้ React
import { StyleSheet, StatusBar,  FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native'

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea  } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { Search } from "../components/search.component";

import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

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

export const RestaurantsScreen = ({ navigation }) => {

    // const [searchQuery, setSearchQuery] = React.useState("");
    // const onChangeSearch = (query) => setSearchQuery(query);

    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    const [isToggled, setIsToggled] = useState(false);
    // console.log(error);


  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={MD2Colors.purple900} />
          </LoadingContainer>
        )}

        {/* <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer> */}

        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && <FavouritesBar />}

        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ padding: 16 }}
        />
        {/* เรียกใช้มาจาก RestaurantInfoCard */}
        {/* <RestaurantInfoCard /> */}
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
