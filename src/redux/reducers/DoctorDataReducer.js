import { DOCTOREDATA_DETAILES} from "../actiontypes/DoctoreDataTypes";
const initialState = {
  doctoreDetaile:[]
};
export default function doctorDataReducer(state = initialState, action) {
  switch (action.type) {
    case DOCTOREDATA_DETAILES:
      return {
        ...state,
        doctoreDetaile: action.data,
      };
  
    default: {
      return state;
    }
  }
}