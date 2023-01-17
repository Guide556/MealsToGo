import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "react-native";

// ถ้า styled ใช้ . ไม่ได้ให้ใช้ ()
// props เป็นการเรียกใช้คุณสมบัติแบบ props โดยใช้ผ่าน ThemeProvider
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: white;
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ ...restaurant }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://rerollcdn.com/GENSHIN/Items/NEW2/Victorious_Legend.png"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
