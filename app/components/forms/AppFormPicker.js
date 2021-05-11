import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import { AppErrorMessage } from ".";

function AppFormPicker({ items, name, placeholder }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
