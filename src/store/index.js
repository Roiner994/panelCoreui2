import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

// importar los reducers
import rootReducer from "./reducers";

// redux saga
import funcionPrimaria from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [
    // "auth"
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//@ts-ignore
const composeEnhacers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  persistedReducer,
  composeEnhacers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(funcionPrimaria);
const persistor = persistStore(store);
export { persistor, store };