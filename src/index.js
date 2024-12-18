import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./Redux/Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import CounterReducer from "./Redux/Reducers/CounterReducer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Admin, Resource, polyglotI18nProvider } from "react-admin";
// import translateService from "./utils/translationService";

// Making store persist ................................................
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [CounterReducer],
};
const persist_r = persistReducer(persistConfig, rootReducer);
const store = createStore(persist_r, composeWithDevTools(), applyMiddleware(thunk));
const persist_s = persistStore(store);

// const i18nProvider = polyglotI18nProvider(() => translateService);

// Main Root Component ..................................................
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Admin i18nProvider={i18nProvider}> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist_s}>
        <App />
      </PersistGate>
      <ToastContainer/>
    </Provider>
    {/* </Admin> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
