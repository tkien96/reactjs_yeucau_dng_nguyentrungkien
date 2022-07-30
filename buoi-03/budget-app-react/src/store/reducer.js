import { v4 as uuidv4 } from 'uuid';
import { calTotalAmount } from "../helper"

const initState = {
  listDataIncome: [
    {
      id: uuidv4(),
      description: "Chi tieu ngay 26/07",
      amount: -100000,
    },
    {
      id: uuidv4(),
      description: "Thu nhap thang 06",
      amount: 3000000,
    },
    {
      id: uuidv4(),
      description: "Thu nhap thang 07",
      amount: 2000000,
    },
    {
      id: uuidv4(),
      description: "Chi tieu ngay 27/07",
      amount: -150000,
    },
  ],
  listIncomes : []
};

function reducer(state = initState, action) {
  return state;
}

export default reducer;