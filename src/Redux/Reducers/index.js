import { combineReducers } from "redux";
import HurrayReducer from "./HurrayReducer";
import ResultReducer from "./ResultReducer";
import UserReducer from "./UserReduser";
import BreakerReducer from "./BreakerReducer";
import CounterReducer from "./CounterReducer";
import CounterDeviceReducer from "./CounterDeviceReducer";
import CounterRemainingDevicesReducer from "./CounterRemainingDevices";
import ShowFinishReducer from "./ShowFinishReducer";
import CorruptDeviceReducer from "./CorruptDevice";
import corruptGroupReducer from "./CorruptGroup";
import GroupDevicesCounterReducer from "./GroupDevicesCounter";
import ChangeLanguageReducer from "./ChangeLanguage";
import ExerciseReducer from "./ExerciseReducer";
import allDisconnectedDevices from "./AllDisconnectedDevices";

export const rootReducer = combineReducers({
  UserReducer: UserReducer,
  ResultReducer: ResultReducer,
  HurrayReducer: HurrayReducer,
  BreakerReducer: BreakerReducer,
  CounterReducer: CounterReducer,
  CounterDeviceReducer: CounterDeviceReducer,
  CounterRemainingDevicesReducer: CounterRemainingDevicesReducer,
  ShowFinishReducer: ShowFinishReducer,
  CorruptDeviceReducer,
  corruptGroupReducer,
  GroupDevicesCounterReducer,
  ChangeLanguageReducer,
  ExerciseReducer,
  allDisconnectedDevices,
});
