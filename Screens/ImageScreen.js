import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Payment from "./Payment";
import { StripeProvider } from "@stripe/stripe-react-native";
export default function ImageScreen() {
  return (
    <StripeProvider publishableKey="pk_test_51NVkg2SB19FY2UvkNYC2C1fFcMegvOC2sS5YsefLBAo6nrgJXCAE9lUX9Ie2QFsum2qKR0sSUurE35dHoLC8WmqP00xxsuJbsU">
      <Payment />
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});