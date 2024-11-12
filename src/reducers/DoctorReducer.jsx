import { actions } from "../actions";

const initialState = {
  doctorData:{},
  error: false,
  loading: false,
};
const DoctorInfoReducer = (state, action) => {
  switch (action.type) {
    case actions.doctor.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case actions.doctor.DATA_FETCHED: {
      return {
        ...state,
        loading:false
    }
}
    case actions.doctor.DATA_CREATED:{
      return {
        ...state,
        doctorData: { ...state.doctorData,...action.doctorData },
        loading: false,
        error: false,
      };
    }
    case actions.doctor.DATA_FETCHED_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export { initialState, DoctorInfoReducer };
