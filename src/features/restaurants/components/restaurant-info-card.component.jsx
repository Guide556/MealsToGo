import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "react-native";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

// ถ้า styled ใช้ . ไม่ได้ให้ใช้ ()
// props เป็นการเรียกใช้คุณสมบัติแบบ props โดยใช้ผ่าน ThemeProvider
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  marginTop: 16px}
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

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ ...restaurant }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://rerollcdn.com/GENSHIN/Items/NEW2/Victorious_Legend.png"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily,
  } = restaurant;

  // การสร้างอาร์เรย์เพื่อเก็บจำนวนภาพ star SVG โดยจำนวนภาพที่จะเก็บนั้นอ้างอิงที่ตัวแปร rating ซึ่งมีจำนวนเท่ากับ 5 
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>

          {/* ratingArray.map การวนลูป */}
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>

          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
