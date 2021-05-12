import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: colors.primary,
    icon: "bed",
  },
  { label: "Cars", value: 2, backgroundColor: colors.orange, icon: "car" },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: colors.deepYellow,
    icon: "camera",
  },
  { label: "Games", value: 4, backgroundColor: colors.green, icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: colors.cyan,
    icon: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: colors.lightBlue,
    icon: "soccer",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: colors.blue,
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: colors.purple,
    icon: "book",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: colors.medium,
    icon: "tag-outline",
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          name="price"
          keyboardType="numeric"
          maxLength={8}
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
          width="50%"
          // remember if you do not supply these two props you will not see the item view
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          name="description"
          maxLength={255}
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
