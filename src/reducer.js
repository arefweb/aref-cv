
export const reducer = (state, action) => {
  if (action.type === "CHANGE_LANG") {
    if (state.lang === "english") {
      return { ...state, lang: "persian" };
    } else {
      return { ...state, lang: "english" };
    }
  }
  return state ;
};

