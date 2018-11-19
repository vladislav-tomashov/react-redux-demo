import {
  RESET_LOADING,
  SET_LOADING,
  INCREMENT_LOADING,
  DECREMENT_LOADING
} from "./loaderActionTypes";

const resetLoading = () => ({
  type: RESET_LOADING
});

const setLoading = () => ({
  type: SET_LOADING
});

const incrementLoading = () => ({
  type: INCREMENT_LOADING
});

const decrementLoading = () => ({
  type: DECREMENT_LOADING
});

export { resetLoading, setLoading, incrementLoading, decrementLoading };
