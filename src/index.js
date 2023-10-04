import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./Redux/Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import CounterReducer from "./Redux/Reducers/CounterReducer";

// Making store persist ................................................
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [CounterReducer],
};
const persist_r = persistReducer(persistConfig, rootReducer);
const store = createStore(persist_r, composeWithDevTools());
const persist_s = persistStore(store);

// Main Root Component ..................................................
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist_s}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
