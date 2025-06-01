import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineSlices(contactsSlice, filtersSlice);

const persistConfig = {
  key: "root",
  storage,
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
