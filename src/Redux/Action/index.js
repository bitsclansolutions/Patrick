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
