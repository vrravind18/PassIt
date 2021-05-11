import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/viggy.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/viggy.jpeg"),
  },
];

function MessagesScreen(props) {
  // Hooks
  const [messages, SetMessages] = useState(initialMessages);
  const [refreshing, SetRefreshing] = useState(false);

  const handleDelete = (message) => {
    // delete the msg from array
    const newMessages = messages.filter((m) => m.id !== message.id);
    SetMessages(newMessages);
    // call server to delete from backend as well
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          SetMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/viggy.jpeg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessagesScreen;
