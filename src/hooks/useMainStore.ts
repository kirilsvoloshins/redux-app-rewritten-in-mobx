import React from "react";
import { MainStoreContext } from "../stores/mainStore";

export function useMainStore() {
  const context = React.useContext(MainStoreContext);
  if (!context) {
    throw new Error("oh well, context is empty :(");
  }

  return context;
}
