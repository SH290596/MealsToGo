import React from "react";
import { Text } from "react-native-paper";
import styled from "styled-components";

const MyText = styled(Text)``;

export const MapCallout = ({ restaurant }) => (
  <MyText>{restaurant.name}</MyText>
);
