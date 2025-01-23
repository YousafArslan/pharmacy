import { COLOR_PICKER_SET,PRICE_SYMBOL_TYPE} from "../actiontypes/CommonTypes";
const initialState = {
  colorrdata:[],
  pricesymboldata:''
};
export default function commomReducer(state = initialState, action) {
  switch (action.type) {
    case COLOR_PICKER_SET:
      return {
        ...state,
        colorrdata: action.colorrdata,
      };
      case PRICE_SYMBOL_TYPE :
        return {
          ...state,
          pricesymboldata: action.pricesymboldata,
        };
    default: {
      return state;
    }
  }
}