import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ ...restaurant }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://rerollcdn.com/GENSHIN/Items/NEW2/Victorious_Legend.png",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
        <Card elevation={5} style={styles.card}>
          <Card.Cover
            key={name}
            style={styles.cover}
            source={{ uri: photos[0] }}
          />
          <Text style={styles.title}>{name}</Text>
        </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 15, backgroundColor: "white" },
  title: { padding: 16 },
});
