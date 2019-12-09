import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import Avatar from "./components/Avatars";
import AuthorRow from "./components/AuthorRow";
import Card from "./components/Card";
// import { Constants } from "expo";
import CardList from "./components/CardList";
import Feed from "./screen/Feed";

const items = [
  { id: 0, author: "Bob Ross" },
  { id: 1, author: "Chuck Norris" }
];
const platformVersion =
  Platform.OS === "ios" ? parseInt(Platform.Version, 10) : Platform.Version;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Feed style={styles.feed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 1,
    flex: 1,
    backgroundColor: "#fff"
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === "android" || platformVersion < 11
        ? StatusBar.currentHeight
        : 0
  }
});
