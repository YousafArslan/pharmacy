import { DOCTOREDATA_DETAILES } from "../actiontypes/DoctoreDataTypes";

export const get_doctore_detailes_action = (data) => dispatch => {
      dispatch({ type: DOCTOREDATA_DETAILES, data: data });
}

