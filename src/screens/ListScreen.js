import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {

  const friends = [
       {name: "doggie 1"},
       {name: "doggie 2"},
       {name: "doggie 3"},
       {name: "doggie 4"},
       {name: "doggie 5"},
  ];
  return (
       <FlatList
       keyExtractor={friend => friend.name}
       data={friends}
       renderItem={({item}) =>{
          return <Text>{ item.name}</Text>;
       }}
       />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
