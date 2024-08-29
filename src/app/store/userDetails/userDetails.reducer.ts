import { createReducer, on } from "@ngrx/store";
import { decrementUser, incrementUser, resetUser, userDetailsArrayUpdate, userDetailsUpdate } from "./userDetails.action";

export type TArrayOfUsers= {
    name: string;
    age: number;
}
export interface IuserDataState {
    count: number;
    userData: { [key: string]: any };
    arrayOfUsersData:TArrayOfUsers[]
}


export const initialUserState:IuserDataState = {
    count: 0,
    userData:{},
    arrayOfUsersData:[]
}


export const userDataReducer = createReducer(initialUserState,
    on(incrementUser,(state)=>({...state,count:state.count +1})),
    on(decrementUser,(state)=>({...state,count:state.count -1})),
    on(resetUser,(state)=>({...state,count:0})),
    on(userDetailsUpdate,(state,{userData})=>({...state,userData:{...state.userData,...userData}})),
    on(userDetailsArrayUpdate,(state,{arrayOfUsers})=>({...state,arrayOfUsersData:[...arrayOfUsers]})),


)