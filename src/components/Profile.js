import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        width: "70%",
        alignItems: "center",
      }}
    >
      <Image
        style={{ borderRadius: 90 }}
        source={{
          uri: "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
          width: 120,
          height: 120,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 22 }}>Rita Correia</Text>
      <Text style={{ color: "grey", marginBottom: 20 }}>London</Text>
      <View
        style={{
          height: 1,
          width: "60%",
          backgroundColor: "lightgrey",
          marginBottom: 20,
        }}
      ></View>
      <View
        style={{
          width: "70%",
          flexDirection: "row",
          alignContent: "space-between",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>80K</Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>803K</Text>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>1.4K</Text>
      </View>
      <View
        style={{
          width: "70%",
          flexDirection: "row",
          alignContent: "space-between",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 11, color: "grey" }}>Followers</Text>
        <Text style={{ fontSize: 11, color: "grey" }}>Likes</Text>
        <Text style={{ fontSize: 11, color: "grey" }}>Photos</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
