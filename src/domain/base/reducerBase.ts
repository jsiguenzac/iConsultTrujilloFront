const reducerBase = () => {
  const INITIAL_STATE = {
    isLoading: false,
    error: null
  };

  const request = (state: any) => ({
    ...state,
    isLoading: true,
    error: null,
    data: null,
    isSuccess: null
  });

  const success = (state: any, action: any) => ({
    ...state,
    isLoading: false,
    data: action.data,
    error: null,
    isSuccess: true
  });

  const failure = (state: any, action: any) => ({
    ...state,
    isLoading: false,
    data: null,
    error: action.error,
    isSuccess: false
  });

  const clear = (state: any) => ({
    ...state,
    isLoading: false,
    data: null,
    error: null,
    isSuccess: null
  });

  return { INITIAL_STATE, request, success, failure, clear };
};

export default reducerBase;
