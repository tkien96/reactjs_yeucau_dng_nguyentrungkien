import { v4 as uuidv4 } from 'uuid';
import * as act from './action'
import { setStorage, getStorage, resetForm } from "../helper"

const initState = {
  listDataIncome: getStorage(act.NAME_STORAGE) || [],
  toggleClass: true
};

function reducer(state = initState, action) {
  switch (action.type) {
    case act.ACT_CHANGE_TYPE:
      return {
        ...state, toggleClass : !state.toggleClass
      }
    case act.ACT_ADD_INCOME:  
      setStorage(
        act.NAME_STORAGE, 
        [
        ...state.listDataIncome, {
            id          : uuidv4(),
            description : action.addDescription,
            amount      : action.addType === "exp" ? action.addValue * -1 : action.addValue * 1
          }
        ]
      )
      resetForm()
      return {
        ...state, listDataIncome : getStorage(act.NAME_STORAGE)
      }
    case act.ACT_DELETE_INCOME:  
      setStorage(act.NAME_STORAGE, state.listDataIncome.filter(item => item.id !== action.idDelete))
      resetForm()
      return {
        ...state, listDataIncome : getStorage(act.NAME_STORAGE)
      }
    default:
      return state
  }
}

export default reducer;