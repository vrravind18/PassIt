import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "T1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    description:
      "D1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    image: require("../assets/viggy.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/viggy.jpeg"),
  },
];

// important tip is to always be aware of the the number of lines prop cause it affects how good the page looks

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
            showChevrons={true}
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
