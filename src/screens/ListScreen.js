import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {

  const friends = [
       {name: "doggie 1", age: 10},
       {name: "doggie 2", age: 12},
       {name: "doggie 3",  age: 10},
       {name: "doggie 4", age: 10},
       {name: "doggie 5", age: 10},
  ];
  return (
       <FlatList
       keyExtractor={friend => friend.name}
       data={friends}
       renderItem={({item}) =>{
          return <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
          </Text>;
       }}
       />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});


export default ListScreen;
