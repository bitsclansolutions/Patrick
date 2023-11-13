import { type } from "@testing-library/user-event/dist/type";

export const userinfo = (val) => {
  return {
    type: "name",
    payload: val,
  };
};

// const Context = creatContext()
// const getValue = (id) => {
//   return id
// }

// <Context.Provider value={getValue}>

// </Context.Provider>

// const {getValue} = useContext()

// getValue(istate)

// result calculation action ...................

export const resultGroundFloor = (val) => {
  return {
    type: "resultGroundFloor",
    payload: val,
  };
};
export const resultFirstFloor = (val) => {
  return {
    type: "resultFirstFloor",
    payload: val,
  };
};
export const resultAtticFloor = (val) => {
  return {
    type: "resultAtticFloor",
    payload: val,
  };
};

export const resultTotal = (val) => {
  return {
    type: "resultTotal",
    payload: val,
  };
};

export const isFinished = () => {
  return {
    type: "isFinished",
  };
};

// hurray reducer ...............................

export const isHurray = (val) => {
  return {
    type: "hurray",
    payload: val,
  };
};

// breaker Type

export const groupOneBreaker = (val) => {
  return {
    type: "firstGroup",
    payload: val,
  };
};
export const kitchenBreaker = (val) => {
  return {
    type: "kitchen",
    payload: val,
  };
};
export const groupThreeBreaker = (val) => {
  return {
    type: "GroupThree",
    payload: val,
  };
};
export const groupFourBreaker = (val) => {
  return {
    type: "groupFour",
    payload: val,
  };
};
export const groupFiveBreaker = (val) => {
  return {
    type: "groupFive",
    payload: val,
  };
};
export const laundaryBreaker = (val) => {
  return {
    type: "laundary",
    payload: val,
  };
};

export const increaseCouter = () => {
  return {
    type: "counter",
  };
};
export const corruptBreakerAttemptedHandler = () => {
  return {
    type: "corruptBreakerAttempted",
  };
};

export const increaseDeviceCounter = () => {
  return {
    type: "counterDevice",
  };
};

export const disconnectDevice = () => {
  return {
    type: "disconnectDevice",
  };
};

export const connectDevice = () => {
  return {
    type: "connectDevice",
  };
};

export const showFinishBtn = () => {
  return {
    type: "showFinishBtn",
  };
};

export const hideFinishBtn = () => {
  return {
    type: "hideFinishBtn",
  };
};

// corrupt device

export const corruptDevice = (val) => {
  return {
    type: "corruptDevice",
    payload: val,
  };
};

// corrupt groupt

export const corruptGroup = (val) => {
  return {
    type: "corruptGroup",
    payload: val,
  };
};

// group devices counter

export const connectCorrupGroupDevice = () => {
  return {
    type: "connectCorrupGroupDevice",
  };
};
export const disconnectCorrupGroupDevice = () => {
  return {
    type: "disconnectCorrupGroupDevice",
  };
};
export const connectCorrectGroupDevice = () => {
  return {
    type: "connectCorrectGroupDevice",
  };
};
export const disconnectCorrectGroupDevice = () => {
  return {
    type: "disconnectCorrectGroupDevice",
  };
};
export const corrupGroupDeviceError = () => {
  return {
    type: "corrupGroupDeviceError",
  };
};
export const correctGroupDeviceError = () => {
  return {
    type: "correctGroupDeviceError",
  };
};
export const corruptAttempted = (val) => {
  return {
    type: "corruptAttempted",
    payload: val,
  };
};

// change language

export const changeLanguage = (val) => {
  return {
    type: "changeLanguage",
    payload: val,
  };
};

// exercise

export const increaseExerciseCounter = () => {
  return {
    type: "increaseExerciseCounter",
  };
};

export const decreaseExerciseCounter = () => {
  return {
    type: "decreaseExerciseCounter",
  };
};
export const resetExerciseCounter = () => {
  return {
    type: "resetExerciseCounter",
  };
};

export const setExerciseCounter = (val) => {
  return {
    type: "setExerciseCounter",
    payload: val,
  };
};

// disconnected devices

export const addDisconnectDevice = (val) => {
  return {
    type: "addDisconnectDevice",
    payload: val,
  };
};
export const removeDisconnectDevice = (val) => {
  return {
    type: "removeDisconnectDevice",
    payload: val,
  };
};
