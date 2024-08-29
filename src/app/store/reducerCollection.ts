import { counterReducer } from "./counter/counter.reducer";
import { userDataReducer } from "./userDetails/userDetails.reducer";




export const conterReducerCol ={ name: 'count', reducer: counterReducer}
export const userReducerCol ={ name: 'userDatas', reducer: userDataReducer}
export const reducerCollections = { 
    count:counterReducer,
    user:userDataReducer
}