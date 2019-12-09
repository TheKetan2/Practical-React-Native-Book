import { FlatList } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { getImageFromId } from "../utils/api";

import Card from "./Card";

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {
  renderItem = ({ item: { id, author } }) => (
    <Card
      fullname={author}
      image={{
        uri: getImageFromId(id)
      }}
    />
  );
  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}
