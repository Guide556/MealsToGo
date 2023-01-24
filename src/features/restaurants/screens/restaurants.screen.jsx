import * as React from "react"; //เรียกใช้ React
import { StyleSheet, StatusBar,  FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from 'styled-components/native'

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea  } from "../../../components/utility/safe-area.component";

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
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
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
