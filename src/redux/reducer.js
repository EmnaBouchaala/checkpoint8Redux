import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./actionTypes";

const data = [
  {
    id: Math.random(),
    description: "Panda sleeping",
    isOk: false,
  },
];

const reducer = (state = data, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case COMPLETE_TASK:
      return state.map((el) =>
        el.id === payload ? { ...el, isOk: !el.isOk } : el
      );
    case DELETE_TASK:
      return state.filter((el) => el.id !== payload);
    case EDIT_TASK:
      return state.map((el) => (el.id === payload.id ? payload : el));
    default:
      return state;
  }
};

export default reducer;
