import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Avatar from "./components/Avatars";
import AuthorRow from "./components/AuthorRow";
import Card from "./components/Card";
// import { Constants } from "expo";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          fullname={"First Last"}
          linkText={"Comments"}
          onPressLinkText={() => {
            console.log("Pressed Link");
          }}
          image={{ uri: "https://unsplash.it/600/600" }}
        />
        {/* <AuthorRow
          fullname={"First Last"}
          linkText={"Comments"}
          onPressLinkText={() => {
            console.log("Pressed link!");
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 1,
    flex: 1,
    backgroundColor: "#fff"
  }
});
