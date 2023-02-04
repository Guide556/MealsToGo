import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { View, Image, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";


// การใช้ style component
// ถ้า styled ใช้ . ไม่ได้ให้ใช้ ()
// props เป็นการเรียกใช้คุณสมบัติแบบ props โดยใช้ผ่าน ThemeProvider

// const RestaurantCard = styled(Card)`
//   background-color: ${(props) => props.theme.colors.bg.secondary};
//   marginTop: 16px
// `;

// const RestaurantCardCover = styled(Card.Cover)`
//   padding: ${(props) => props.theme.space[3]};
//   background-color: white;
// `;

// const Title = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.heading};
//   font-size: ${(props) => props.theme.fontSizes.body};
//   color: ${(props) => props.theme.colors.ui.primary};
// `;

// const Address = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.body};
//   font-size: ${(props) => props.theme.fontSizes.caption};
// `;

// const Info = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;

// const Rating = styled.View`
//   flex-direction: row;
//   padding-top: ${(props) => props.theme.space[2]};
//   padding-bottom: ${(props) => props.theme.space[2]};
// `;

// const Section = styled.View`
//   flex-direction: row;
//   align-items: center;
// `;

// const SectionEnd = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: flex-end;
// `;

// Test 

const Section1 = styled.View`
  flex-direction: row;
  align-items: center;
`;

 const SectionEnd1 = styled.View`
   flex: 1;
   flex-direction: row;
   justify-content: flex-end;
 `;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://rerollcdn.com/GENSHIN/Items/NEW2/Victorious_Legend.png",
      "https://i.pinimg.com/736x/1f/0a/43/1f0a43f2d30ab6b34f9f94f6aefda6a4.jpg",
    ],

    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  // การสร้างอาร์เรย์เพื่อเก็บจำนวนภาพ star SVG โดยจำนวนภาพที่จะเก็บนั้นอ้างอิงที่ตัวแปร rating ซึ่งมีจำนวนเท่ากับ 5
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>

          <Section>
            {/* ratingArray.map การวนลูป */}
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml  key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
              ))}
            </Rating>

            <SectionEnd>
              {isClosedTemporarily && (
                <Text
                  style={{ color: "red", fontStyle: "italic", fontSize: 10 }}
                  // variant="error"
                >
                  CLOSED TEMPORARILY
                </Text>
              )}
              <View style={{ paddingLeft: 16 }} />

              {/* ตั้งเงื่อนไขการแสดง */}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <View style={{ paddingLeft: 16 }} />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
