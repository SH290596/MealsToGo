import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components";

// && is used here to check if StatusBar.currentHeight has a value//
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
